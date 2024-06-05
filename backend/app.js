// const dbconnection= require("./db")
// const cors = require('cors');
// const express = require("express");
// const app = express();
// const conatactUsRouters = require("./contactUsRouters");
// // const applicationFormRouters = require("./applicationFormRouters");
// // const classesRouters = require('./classRouters')
// // const bodyParser = require("body-parser");
// // const subscribeRouters = require("./subscribeRouters")
// // const chatBotRouter = require('./chatBotRouters')

// // Define middleware
// app.use(express.json());
// // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use(cors());

// app.use('/resume', express.static('resume'));


// app.use(cors({
//     origin: 'http://localhost:4200' // Replace with your frontend URL
//   }));
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
// app.get('/api/contact', (req, res) => {
//     res.json({ message: 'Contact API' });
//   });
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../frontend/docs', 'index.html'));
//   });
// // Define URL handler
// // app.use("/contact", conatactUsRouters);

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`); 
// });




// module.exports = app;


const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, '../frontend/docs')));

// API endpoint example
app.get('/api/contact', (req, res) => {
  res.json({ message: 'Contact API' });
});

// Fallback to Angular's index.html for other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../frontend/docs', 'index.html'));
// });

module.exports = app;

