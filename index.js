const express = require('express');
const app = express();

app.use(express.static('app'));

const port = 80;
app.listen(port, () => {
    console.log('Server runing at http://localhost:80/');
});