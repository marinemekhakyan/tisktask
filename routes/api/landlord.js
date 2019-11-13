const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../../models/');

// @route      POST api/landlord
// @desc       register landlord
// @access     public
router.post(
  '/',
  [
    check('first_name', 'First name is required')
      .not()
      .isEmpty(),
    check('last_name', 'Last name is required')
      .not()
      .isEmpty(),
    check('personal_phone', 'Please use a valid phone number').isLength({
      min: 10
    }),
    check('property_email', 'Please use a valid email address').isEmail(),
    check('personal_email', 'Please use a valid email address').isEmail()
    // check('unit_number', 'Unit number is required')
    //   .not()
    //   .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    console.log(req.body);
    db.Landlords.create(req.body)
      .then(r => {
        res.send('Landlord saved');
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ errors: err });
      });
  }
);

// for testing route connection
// router.get('/', (req, res) => {
//   res.send('Landlord route working');
// });

module.exports = router;
