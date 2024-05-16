//models/pedido.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    client: [
        {
            customerName: {
                type: String,
                required: true
            },
            customerSurname: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            }
        }
    ],
    pizza: [
        {
            pizzaType: {
                type: String,
                required: true
            },
            pizzaSize: {
                type: String,
                enum: ['Small', 'Medium', 'Big', 'Extra Big'], 
                required: true
            },
            pizzaPrice: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                min: 1, 
                default: 1
            },
        }
    ],
    orderInfo: [
        {
            status: {
                type: String,
                enum: ['Received', 'Preparing', 'Out for delivery', 'Delivered'], 
                default: 'Received'
            },
            totalPrice: {
                type: Number,
                required: true
            },
            paymentMethod: {
                type: String,
                required: true,
                enum: ['Debit Card', 'Credit Card', 'Cash', 'Transfer']
            },
            isPayed: {
                type: Boolean,
                default: false
            }
        }
    ]
});

module.exports = Order;