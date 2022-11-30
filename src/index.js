require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const app = express();

const corsEnv = process.env.ALLOWED_ORIGINS;

var corsConfig = {
  origin: !corsEnv ? ['http://localhost:3000'] : corsEnv.split(','),
};

app.use(cors(corsConfig));
app.use(express.json());
app.use('/users', userRoutes);
app.get('/ping', (req, res) => res.json('pong!'));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));
