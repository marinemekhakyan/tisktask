const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../../models/');

// @route      POST api/tenant
// @desc       register tenant
// @access     private
router.post('/:unitid/ticket/', (req, res) => {
    console.log(req.body);
    db.Tickets.create({ ...req.body, UnitId: req.params.unitid })
      .then(r => {
        res.send('Ticket saved');
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ errors: err });
      });
  }
);

router.put('/:unitid/ticket/:ticketId', (req, res) => {
  console.log(req.body);
  db.Tickets.update( req.body, { where: { UnitId: req.params.unitid, id: req.params.ticketId } })
    .then(r => {
      res.send('Ticket updated');
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ errors: err });
    });
}
);

router.get('/:unitid/tickets', (req, res) => {
    console.log(req.params);
    db.Tickets.findAll({ UnitId: req.params.unitid })
      .then(ticketsDB => {
        res.json(ticketsDB)
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ errors: err });
      });
  }
)

// for testing route connection
// router.get('/', (req, res) => {
//   res.send('Tenant route working');
// });

module.exports = router;
