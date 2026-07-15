import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name field!'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email field!'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password field!'],
    },
    role: {
      type: String,
      required: [true, 'Please add a role!'],
      default: 'User',
    },
    username: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      required: [true, 'please add a phone field!'],
    },
    website: {
      type: String,
      default: '',
    },
    address: {
      city: {
        type: String,
        default: '',
      },
    },
    company: {
      name: {
        type: String,
        default: '',
      },
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('User', userSchema);
