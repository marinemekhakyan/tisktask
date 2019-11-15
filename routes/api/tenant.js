const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const db = require("../../models/");

// @route      POST api/tenant/resetpassword
// @desc       reset tenants login password
// @access     private
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
              res.send("Tenant updated");
              console.log(req.body);
            })
            .catch(err => {
              console.error(err);
              return res.status(500).json({ errors: err });
            });
        });
      })
      .catch(e => {
        console.error(e);
        return res.status(500).json({ errors: e });
      });
  }
);

// for testing route connection
// router.get('/', (req, res) => {
//   res.send('Tenant route working');
// });

module.exports = router;
