const Tenant = require('../models/tenant');

module.exports = {
  create(req, res) {
    Tenant.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      primary_phone: req.body.primary_phone,
      primary_email: req.body.primary_email,
      property_name: req.body.property_name,
      property_address: req.body.property_address,
      unit_number: req.body.unit_number
    })
      .then(tenant => {
        res.status(201);
        return tenant.save();
      })
      .catch(err => {
        return res.status(400).send(err);
      });
  }
};
