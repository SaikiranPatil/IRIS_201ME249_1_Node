const express = require("express");
const app = express();

const dotenv = require("dotenv");
const bodyparser = require("body-parser");

// path for config 
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;


// import db    
const connectDB = require("./server/database/connections");
// connecting to database 
connectDB();

app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));


// import routes
const userRoutes = require('./server/routes/userRoutes');
app.use('/',userRoutes);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})