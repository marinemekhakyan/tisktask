const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const db = require("../../models/");

// ROUTE 1 ----------------------------------------------------------
// @route      PUT api/tenant/resetpassword
// @desc       reset tenants login password
// @access     public
router.put(
  "/resetpassword",
  [
    check("first_name", "First name is required")
      .not()
      .isEmpty(),
    check("last_name", "Last name is required")
      .not()
      .isEmpty(),
    check("primary_phone", "Please use a valid phone number").isLength({
      min: 10
    }),
    check("primary_email", "Please use a valid email address").isEmail(),
    check(
      "password",
      "Password must be minimum 12 characters in length"
    ).isLength({ min: 12 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    db.Tenants.findOne({
      where: {
        primary_email: req.body.primary_email
      }
    })
      .then(response => {
        if (!response) {
          return res
            .status(400)
            .json({ errors: [{ msg: "User does not exist" }] });
        }

        const password = req.body.password;
        const saltRounds = 10;

        bcrypt.hash(password, saltRounds, function(err, hash) {
          req.body.password = hash;
          console.log(req.body.password);
          db.Tenants.update(
            { password: hash },
            { where: { primary_email: req.body.primary_email } }
          )
            .then(r => {
              // res.send("Tenant updated");
              console.log("Tenant updated\n" + req.body);
            })
            .catch(err => {
              console.error(err);
              return res.status(500).json({ errors: err });
            });
          db.Users.create({
            username: req.body.primary_email,
            hash: hash,
            role: "tenant"
          })
            .then(re => {
              res.send("Tenant updated and saved as user");
              console.log({
                username: req.body.primary_email,
                hash: hash,
                role: "tenant"
              });
            })
            .catch(er => {
              console.error(er);
              return res.status(500).json({ errors: er });
            });
        });
      })
      .catch(e => {
        console.error(e);
        return res.status(500).json({ errors: e });
      });
  }
);

// ROUTE 2 ----------------------------------------------------------
// @route      POST api/tenant/login
// @desc       tenant login
// @access     public
router.post("/login", (req, res) => {
  db.Users.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(response => {
      if (!response) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Incorrect username or password" }] });
      }

      bcrypt
        .compare(req.body.password, response.hash)
        .then(match => {
          if (match) {
            req.session.user = response;
            return res.status(200).send("Tenant successfully logged in");
          }
          return res.status(401).send("Incorrect username or password");
        })
        .catch(err => {
          return res.status(500).send(err.message);
        });
    })
    .catch(e => {
      console.error(e);
      return res.status(500).json({ errors: e });
    });
});

// ROUTE 3 ----------------------------------------------------------
// @route      POST api/tenant/create/ticket
// @desc       tenant creates tickets
// @access     private
router.post(
  "/create/ticket",
  [
    check("request", "Request is required")
      .not()
      .isEmpty()
  ],
  (req, res) => {
    db.Tickets.create(req.body)
      .then(r => {
        console.log(req.body);
        return res.send("Ticket created");
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ errors: err });
      });
  }
);

// ROUTE 3 ----------------------------------------------------------
// @route      GET api/tenant/get/tickets
// @desc       tenant gets tickets for viewing
// @access     private
router.get("/get/tickets", (req, res) => {
  db.Tickets.findAll({
    where: {
      tenant_email: "marine@email.com"
    }
  })
    .then(response => {
      if (!response) {
        return res.status(400).json({ errors: [{ msg: "No tickets" }] });
      }

      return res.status(200).send(response);
    })
    .catch(e => {
      console.error(e);
      return res.status(500).json({ errors: e });
    });
});

module.exports = router;
