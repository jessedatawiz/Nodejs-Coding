// database.js
const mongoose = require('mongoose');

const MONGOBD_URI = "mongodb+srv://jesseeorodrigues:NIJ6Mys6VMOARZVA@cluster0.gtvzfxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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