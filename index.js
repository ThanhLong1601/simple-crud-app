const express = require("express");
// var mysql = require('mysql');
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/user.router.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server Update");
});

// Connected DB
mongoose
  .connect(
    "mongodb+srv://thanhlong160100:qD3JqhhHThQaBkGX@backenddb.8pub5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// var connection = mysql.createConnection({
//     host: '127.0.0.1',
//     port: '3306',
//     user: 'root',
//     password: 'Long@1811060442',
//     database: 'Node_API'
// });

// connection.connect(function (error) {
//     if (error) {
//         console.error('Connection failed! Error:', error.message);
//         return;
//     }
//     console.log('Connected to database!');
//     app.listen(3000, () => {
//         console.log('Server is running on port 3000');
//     });

//     connection.end();
// });
