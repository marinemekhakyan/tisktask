const bcrypt = require('bcrypt');
const db = require('../models/');

// Defining methods for the authController
module.exports = {
  register: (req, res) => {
    console.log('REGISTER');
    bcrypt
      .genSalt()
      .then(salt => {
        bcrypt
          .hash(req.body.password, salt)
          .then(hash => {
<<<<<<< HEAD
            console.log("create user on controller")
            db.Users
              .create({ username: req.body.username, hash, role: req.body.role })
=======
            console.log('create user on controller');
            db.Users.create({ username: req.body.username, hash })
>>>>>>> 52d06a2632401fbc13549a0e0dcd73f494ee221b
              .then(newUser => {
                res.send(200);
              })
              .catch(err => res.status(500).send(err.message));
          })
          .catch(err => res.status(500).send(err.message));
      })
      .catch(err => res.status(500).send(err.message));
  },
  login: (req, res) => {
<<<<<<< HEAD
    db.Users
      .findOne({ username: req.body.username })
=======
    db.User.findOne({ username: req.body.username })
>>>>>>> 52d06a2632401fbc13549a0e0dcd73f494ee221b
      .then(user => {
        if (!user) {
          res.status(401).send('username or password incorrect');
        }

        bcrypt
          .compare(req.body.password, user.hash)
          .then(match => {
            if (match) {
              req.session.user = user;
              res.send(200);
            }
            res.status(401).send('username or password incorrect');
          })
          .catch(err => res.status(500).send(err.message));
      })
      .catch(err => res.status(500).send(err.message));
  },
  validateSession: (req, res) => {
    const reqsid = decodeURIComponent(req.params.sid)
      .split(':')[1]
      .split('.')[0];
    console.info('sid:', req.sessionID, reqsid);
    if (reqsid === req.sessionID) {
      return res.sendStatus(200);
    }
    return res.sendStatus(403);
  },
  logout: (req, res) => {
    req.session.destroy(err => {
      if (err) {
        res.status(500).send(err.message);
      }
      res.send(200);
    });
  }
};
