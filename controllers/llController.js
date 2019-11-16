const Landlord = require('../models/landlord');

build(req, res) {
  Landlord.build({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    personal_phone: req.body.personal_phone,
    property_email: req.body.property_email,
    personal_email: req.body.personal_email
  })
}

module.exports = Landlord;
