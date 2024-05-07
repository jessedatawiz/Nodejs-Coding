const express = require('express');

//creates a router
const router = express.Router();

router.get('/', (_, res) => {
    res.send('hello world');
});

// exports the router module
module.exports = router;