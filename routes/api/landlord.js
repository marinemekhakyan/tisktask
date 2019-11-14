const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const db = require("../../models/");

// @route      POST api/landlord/register
// @desc       register landlord
// @access     public
router.post(
  "/register",
  [
    check("first_name", "First name is required")
      .not()
      .isEmpty(),
    check("last_name", "Last name is required")
      .not()
      .isEmpty(),
    check("phone_number", "Please use a valid phone number")
      .isNumeric()
      .isLength({
        min: 10
      }),
    check("email", "Please use a valid email address").isEmail(),
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

    db.Landlords.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(response => {
        if (response) {
          return res
            .status(400)
            .json({ errors: [{ msg: "User already exists" }] });
        }

        const password = req.body.password;
        const saltRounds = 10;

        bcrypt.hash(password, saltRounds, function(err, hash) {
          req.body.password = hash;
          console.log(req.body.password);
          db.Landlords.create(req.body)
            .then(r => {
              res.send("Landlord saved");
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

module.exports = router;
