const express = require('express');
//creates a router
const router = express.Router();

router.get('/', (_, res) => {
    const nomeDoUsuario = "Fred";
    res.render(
        'principal/index', 
        { nomeDoUsuario }
    );
});

// exports the router module
module.exports = router;