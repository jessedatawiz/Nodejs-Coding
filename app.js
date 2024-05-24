// calls the express module
const express = require('express');
// call variable path
const path = require('path');

//import the router module
const routerPedidos = require('./routes/routeOrders');
const routerPrincipal = require('./routes/routePrincipal');

// imports the database connection
const { connectToDatabase } = require('./models/database');

const app = express();
const port = 3000;

//setting ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/orders', routerPedidos);
app.use('/', routerPrincipal);

app.listen(port, () => {
    // creates only one connection to our db
    connectToDatabase();
    console.log(`Server running at ${port}`);
});





