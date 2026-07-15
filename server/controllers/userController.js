import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Get user
export const getUser = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// Register user
export const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    username,
    phone,
    website,
    city, // 👈 Change "address" to "city" here!
    company, // 👈 Keep "company" (the flat string from React)
    role,
  } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists!');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    username: username || '',
    phone,
    website: website || '',
    address: {
      city: city || '',
    },
    company: {
      name: company || '',
    },
    role: role || 'User',
  });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    username: user.username,
    phone: user.phone,
    website: user.website,
    address: user.address,
    company: user.company,
    role: user.role,
    token: generateToken(user._id),
  });
});

// Login user

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      message: 'Login successful!',
    });
  } else {
    res.status(400);
    throw new Error('Invalid user credentials!');
  }
});

// Delete user
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'User deleted successfully!' });
  } else {
    res.status(400).json({ message: 'User not found!' });
  }
});

// Update user
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error('User not found!');
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.username =
    req.body.username !== undefined ? req.body.username : user.username;
  user.phone = req.body.phone !== undefined ? req.body.phone : user.phone;
  user.website =
    req.body.website !== undefined ? req.body.website : user.website;

  if (req.body.address) {
    user.address = {
      city:
        req.body.address.city !== undefined
          ? req.body.address.city
          : user.address?.city,
    };
  }

  if (req.body.company) {
    user.company = {
      name:
        req.body.company.name !== undefined
          ? req.body.company.name
          : user.company?.name,
    };
  }
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
  }

  const updatedUser = await user.save();

  res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    role: updatedUser.role,
    username: updatedUser.username,
    phone: updatedUser.phone,
    website: updatedUser.website,
    address: updatedUser.address,
    company: updatedUser.company,
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};
