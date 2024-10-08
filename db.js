const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = process.env.MONGODB_URL_LOCAL //replace "hotels" with your database name
const mongoURL = process.env.MONGODB_URL;

//Set up MongoDB connection
mongoose.connect(mongoURL , {
    // useNewUrlParser : true,
    // useUnifiedTopology : true
    
})


//Get the default connection
//Mongoose maintains a default connection object represent the mongoDB connection
const db = mongoose.connection;


db.on('connected' , () => {
    console.log('Connected to MongoDB server');
})
db.on('error' , (err) => {
    console.log('MongoDB connection error : ',err);
})
db.on('disconnected' , () => {
    console.log('MongoDB disconnected');
})


//Export the database connection
module.exports = db;

