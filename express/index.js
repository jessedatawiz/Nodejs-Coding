// Express application
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';
// configuration
const
__dirname = dirname(fileURLToPath( import.meta.url )) + sep,
cfg = {
port: process.env.PORT || 3000,
dir: {
root: __dirname,
static: __dirname + 'static' + sep
}
};
console.dir(cfg, { depth: null, color: true });

// Express initiation
const app = express();

// home page route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//another route
app.get('/hello/', (req, res) => {
    res.send('Hello There!');
});

// log every request to the terminal
app.use((req, res, next) => {
    console.log(req.url);
    next();
    });    

// serve static assets
app.use(express.static( cfg.dir.static ));


// start server
app.listen(cfg.port, () => {
    console.log(`Example app at ${ cfg.port }`);
});

// exports defaults
export { cfg, app };