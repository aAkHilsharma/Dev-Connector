require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//body parser
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));

const path = require('path');
__dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
