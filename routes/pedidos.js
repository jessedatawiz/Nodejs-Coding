const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.send('Rota raiz de pedidos');
});

module.exports = router;