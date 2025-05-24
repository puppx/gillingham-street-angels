const express = require('express');
const app = express();
//const dotenv = require('dotenv');
//const port = process.env.PORT
const port = 4004;

app.use(express.static('./public'));

app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
}