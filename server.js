const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();


connectDB();


const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
  });

  // Error Handling Middleware
  app.use(notFound);
  app.use(errorHandler);

  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });