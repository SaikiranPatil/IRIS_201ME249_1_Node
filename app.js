const express = require("express");
const app = express();

const port = 3000;

app.get('/', function (req, res) {
    res.write("Hello World");
    res.send();
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})