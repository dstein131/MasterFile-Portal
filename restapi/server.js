const express = require('express');
const masterfileRoutes = require('./src/masterfile/routes');
const app = express();
const port = 3111;


app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the Masterfile Portal DB Server!'));

app.use ('/masterfile', masterfileRoutes);




app.listen(port, () => console.log(`Masterfile Portal Server app listening on port ${port}!`));

