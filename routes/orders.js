const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('pedidos/index', {
        nomeDoUsuario: "Freducao",
    });
});

module.exports = router;