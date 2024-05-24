// Import the necessary modules
const express = require('express');      // Express web framework
const router = express.Router();        // Create a router for handling routes

// Import the Order model for database interaction
const { Order } = require('../models/order'); 

// Define the root route ('/') for the router
router.get('/', (_, res) => { 
    // _ is used as a placeholder for the req object since it's not being used in this route.

    // Fetch all orders from the database
    Order.find({}).then((orders) => {  
        // .find({}) means get all documents from the Order collection
        // .then((orders) => ...) executes when the query is done

        // Render the 'orders/index' view and pass data to it
        res.render('orders/index', {  // 'orders/index' should be the name of your EJS file
            orders: orders           // Pass the fetched orders to the template
        });
    });
});

// Export the router so it can be used in your main application
module.exports = router;
