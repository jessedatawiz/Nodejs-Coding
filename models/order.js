const mongoose = require('mongoose');

// Define the schema for an order document
const orderSchema = new mongoose.Schema({
  // Information about the client
  client: {
    clientName: { type: String, required: true }, // Client's first name (required)
    clientSurname: { type: String, required: true } // Client's last name (required)
  },

  // Array to store details about the pizzas ordered
  pizzas: [{
    pizzaType: { type: String, required: true },  // Type of pizza (e.g., Pepperoni)
    quantity: { type: Number, required: true, min: 1 }, // How many of this pizza
    pizzaSize: {
      type: String,
      enum: ['Small', 'Medium', 'Large'],  // Limited to these size choices
      required: true
    }
  }],

  // How the client paid for the order
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'Debit Card', 'Cash'], // Limited to these options
    required: true
  },

  // Total cost of the order
  totalPrice: { type: Number, required: true, min: 0 }, // Must be a positive number

  // Indicates if the order has been paid for
  payed: { type: Boolean, default: false } // Initially false, updated when paid
});

// Create a Mongoose model based on this schema
const Order = mongoose.model('Order', orderSchema);

// Make the model available for use in other parts of your application
module.exports = { Order };
