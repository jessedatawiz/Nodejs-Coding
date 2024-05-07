// calls the express module
const express = require('express');

//import the router module
const routerPedidos = require('./routes/pedidos');
const routerPrincipal = require('./routes/principal');

const app = express();
const port = 3000;

app.use('/pedidos', routerPedidos);
app.use('/', routerPrincipal);

app.listen(port, () => {
    console.log(`server running at ${port}`);
});

