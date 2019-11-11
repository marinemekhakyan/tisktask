const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route      POST api/tenant
// @desc       register tenant
// @access     private
router.post(
  '/',
  [
    check('first_name', 'First name is required')
      .not()
      .isEmpty(),
    check('last_name', 'Last name is required')
      .not()
      .isEmpty(),
    check('primary_phone', 'Please use a valid phone number').isLength({
      min: 10
    }),
    check('primary_email', 'Please use a valid email address').isEmail(),
    check('property_name', 'Property name is required')
      .not()
      .isEmpty(),
    check('property_address', 'Property name is required')
      .not()
      .isEmpty(),
    check('unit_number', 'Unit number is required')
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    console.log(req.body);
    res.send('Tenant saved?? Check console');
  }
);

// for testing route connection
// router.get('/', (req, res) => {
//   res.send('Tenant route working');
// });

module.exports = router;
