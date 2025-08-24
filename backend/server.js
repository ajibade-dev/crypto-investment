import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from "cors"
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5000", // for local dev
//       "https://crypto-investment-eight.vercel.app" // your deployed frontend
//     ],
//     credentials: true,
//   })
// );

// ✅ Flexible CORS with whitelist
const whitelist = [
  'http://localhost:3000',              // local dev frontend
  // 'http://localhost:3000',              // (optional, in case you test React dev server)
  'https://crypto-investment-eight.vercel.app', // your current frontend
  // 'https://yourcustomdomain.com'        // add custom domain when ready
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'Set-Cookie'],
};

app.use(cors(corsOptions));


app.use('/api/users', userRoutes)


app.get("/", (req, res) => res.send('Server is ready'))
app.get("/health", (req, res) => res.status(200).send("OK"));


app.use(notFound);
app.use(errorHandler )
app.listen(port, () => console.log(`Server started on port ${port}`))