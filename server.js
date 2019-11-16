const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const routes = require('./routes/');

var db = require('./models');

var PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const sessConfig = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { path: '/', httpOnly: false, maxAge: 15 * 60 * 1000 }
};

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
  sessConfig.cookie.secure = true;
}

app.use(session(sessConfig));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});
