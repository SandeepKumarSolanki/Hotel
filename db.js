const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels' //replace "hotels" with your database name

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

