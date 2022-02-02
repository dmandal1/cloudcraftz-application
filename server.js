const express = require('express');
const dotenv = require('dotenv');
const questions = require('./routes/questions');
const users = require('./routes/users');
const results = require('./routes/results');
const auth = require('./routes/auth');
const errorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');
dotenv.config({ path: './config/config.env' });
const connectDB = require('./config/db');


connectDB();

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Mound routers
app.use('/api/v1/questions',questions);
app.use('/api/v1/users',users);
app.use('/api/v1/results',results);
app.use('/api/v1/auth',auth);

app.use(errorHandler);

const PORT = process.env.PORT || 1000;
app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
