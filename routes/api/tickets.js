const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../../models/');

// @route      POST api/tenant
// @desc       register tenant
// @access     private
router.post(
  '/',
  [
    check('request_type', 'Request type is required')
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    console.log(req.body);
    db.Tickets.create(req.body)
      .then(r => {
        res.send('Ticket saved');
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ errors: err });
      });
  }
);

// for testing route connection
// router.get('/', (req, res) => {
//   res.send('Tenant route working');
// });

module.exports = router;
