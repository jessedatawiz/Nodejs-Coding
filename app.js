// calls the express module
const express = require('express');
// call variable path
const path = require('path');

//import the router module
const routerPedidos = require('./routes/pedidos');
const routerPrincipal = require('./routes/principal');

const app = express();
const port = 3000;

//setting ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/pedidos', routerPedidos);
app.use('/', routerPrincipal);

app.listen(port, () => {
    console.log(`server running at ${port}`);
});
