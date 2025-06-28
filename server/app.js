// server/app.js

import express from 'express';
import cors from 'cors';
// import path from 'path'; // Remove unused import

const app = express();

// 1) Middleware
app.use(cors());
app.use(express.json());

// 2) Routes
// (we'll adjust this once I see your productRoutes file)
import productRoutes from './routes/productRoutes.js';
app.use('/api/products', productRoutes);

// 3) Static assets (optional)
// If you later serve a frontend from here:
// app.use(express.static(path.join(__dirname, '../public')));

export default app;
