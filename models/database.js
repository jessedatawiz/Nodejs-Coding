// database.js
const MONGOBD_URI = "mongodb+srv://jesseeorodrigues:NIJ6Mys6VMOARZVA@cluster0.gtvzfxa.mongodb.net/mypizzaria"

const mongoose = require('mongoose');

// estabilshes connection to mongodb
async function connectToDatabase() {
    try {
        const connectionString = MONGOBD_URI; 
        await mongoose.connect(connectionString);

        console.log('Connected to MongoDB successfully!');

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if the connection fails (optional)
    }
}

module.exports = {
    connectToDatabase,
};