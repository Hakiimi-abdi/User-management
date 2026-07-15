import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(` Server is running on port ${port} 🚀`.green.bold);
});
