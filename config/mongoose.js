// require library
const mongoose = require('mongoose');

//connecting to database
// mongodb+srv://samirsayyed:786Samir!@cluster1.7ryvl.mongodb.net/Cluster0?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://anishkr365:anish2022@cluster0.nhtk0.mongodb.net/thirdDatabase?retryWrites=true&w=majority');

// aquire the connection
const db = mongoose.connection;

// if error occurs
db.on('error', console.error.bind(console, "Error in connecting to DataBase"));

// if running then print message

db.once('open', function(){
    console.log('Connected to database successfully')
});

// export the database
module.exports = db;