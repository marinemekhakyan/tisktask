const express = require('express');
// const mongoose = require("mongoose"); MYSQL CONNECTION INSTEAD
// const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

// init middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static assets (for heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// use routes
// app.use(routes);

// connect to db
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
// MYSQL CONNECTION INSTEAD

// start server
app.listen(PORT, function() {
  console.log(`Server listening on PORT ${PORT}!`);
});
