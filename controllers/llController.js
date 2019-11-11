const Landlord = require('../models/landlord');

module.exports = {
  create(req, res) {
    Landlord.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      property_name: req.body.property_name,
      property_address: req.body.property_address,
      property_phone: req.body.property_phone,
      personal_phone: req.body.personal_phone,
      property_email: req.body.property_email,
      peronsal_email: req.body.personal_email
    })
      .then(landlord => {
        res.status(201);
        return landlord.save();
      })
      .catch(err => {
        return res.status(400).send(err);
      });
  }
};
