const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://petstagram-pzn9.onrender.com/wedidit_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection error'));

db.disconnect = async function() {
    await mongoose.disconnect();
    console.log('Disconnected to the database');
};

module.exports = db;