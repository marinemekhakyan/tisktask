const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const db = require("../../models/");

// ROUTE 1 ----------------------------------------------------------
// @route      POST api/landlord/register/self
// @desc       landlord registers self
// @access     public
router.post(
  "/register/self",
  // [
  //   check("first_name", "First name is required")
  //     .not()
  //     .isEmpty(),
  //   check("last_name", "Last name is required")
  //     .not()
  //     .isEmpty(),
  //   check("phone_number", "Please use a valid phone number")
  //     .isNumeric()
  //     .isLength({
  //       min: 10
  //     }),
  //   check("email", "Please use a valid email address").isEmail(),
  //   check(
  //     "password",
  //     "Password must be minimum 12 characters in length"
  //   ).isLength({ min: 12 })
  // ],
  (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array() });
    // }

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
          db.Users.create({
            username: req.body.email,
            hash: hash,
            role: "landlord"
          })
            .then(re => {
              res.send("Landlord as user saved");
              console.log({
                username: req.body.email,
                hash: hash,
                role: "landlord"
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
// @route      POST api/landlord/login
// @desc       landlord login
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
            return res.status(200).send("Landlord successfully logged in");
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
// @route      POST api/landlord/register/tenant
// @desc       landlord registers tenant
// @access     private
router.post(
  "/register/tenant",
  // [
  //   check("first_name", "First name is required")
  //     .not()
  //     .isEmpty(),
  //   check("last_name", "Last name is required")
  //     .not()
  //     .isEmpty(),
  //   check("primary_phone", "Please use a valid phone number")
  //     .isNumeric()
  //     .isLength({
  //       min: 10
  //     }),
  //   check("primary_email", "Please use a valid email address").isEmail(),
  //   check(
  //     "password",
  //     "Temporary password minimum 12 characters is required"
  //   ).isLength({
  //     min: 12
  //   })
  // ],
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
        if (response) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Tenant already exists" }] });
        }

        console.log(req.body);
        db.Tenants.create(req.body)
          .then(r => {
            res.send("Tenant saved");
          })
          .catch(err => {
            console.error(err);
            return res.status(500).json({ errors: err });
          });
      })
      .catch(e => {
        console.error(e);
        return res.status(500).json({ errors: e });
      });
  }
);

// ROUTE 4 ----------------------------------------------------------
// @route      POST api/landlord/register/property
// @desc       landlord registers property
// @access     private
router.post("/register/property", (req, res) => {
  db.Properties.create(req.body)
    .then(r => {
      console.log(req.body);
      console.log("New property added");
    })
    .catch(e => {
      if (e) throw e;
      return res.status(500);
    });
});

// ROUTE 5 ----------------------------------------------------------
// @route      GET api/landlord/find/property
// @desc       landlord finds property (for updating data)
// @access     private
router.get(
  "/find/property",
  // [
  //   check("property_name", "Property name is required")
  //     .not()
  //     .isEmpty(),
  //   check("property_address", "Property address is required")
  //     .not()
  //     .isEmpty(),
  //   check("property_phone", "Please use a valid phone number")
  //     .isNumeric()
  //     .isLength({
  //       min: 10
  //     })
  // ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    db.Properties.findOne({
      where: {
        property_name: req.body.property_name,
        property_address: req.body.property_address,
        property_phone: req.body.property_phone
      }
    })
      .then(response => {
        if (!response) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Property does not exist" }] });
        }

        return res.status(200).send(response);
      })
      .catch(e => {
        console.error(e);
        return res.status(500).json({ errors: e });
      });
  }
);

// ROUTE 6 ----------------------------------------------------------
// @route      PUT api/landlord/update/property
// @desc       landlord updates property
// @access     private
router.put(
  "/update/property",
  // [
  //   check("property_name", "Property name is required")
  //     .not()
  //     .isEmpty(),
  //   check("property_address", "Property address is required")
  //     .not()
  //     .isEmpty(),
  //   check("property_phone", "Please use a valid phone number")
  //     .isNumeric()
  //     .isLength({
  //       min: 10
  //     })
  // ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    db.Properties.findOne({
      where: {
        property_address: req.body.property_address
      }
    })
      .then(response => {
        if (!response) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Property does not exist" }] });
        }

        console.log(req.body);
        db.Properties.update(
          { property_name: req.body.property_name },
          { where: { property_address: req.body.property_address } }
        )
          .then(r => {
            return res.send("Property updated");
          })
          .catch(err => {
            console.error(err);
            return res.status(500).json({ errors: err });
          });
      })
      .catch(e => {
        console.error(e);
        return res.status(500).json({ errors: e });
      });
  }
);

// ROUTE 7 ----------------------------------------------------------
// @route      DELETE api/landlord/delete/property
// @desc       landlord deletes property
// @access     private
router.delete(
  "/delete/property",
  // [
  //   check("property_name", "Property name is required")
  //     .not()
  //     .isEmpty(),
  //   check("property_address", "Property address is required")
  //     .not()
  //     .isEmpty(),
  //   check("property_phone", "Please use a valid phone number")
  //     .isNumeric()
  //     .isLength({
  //       min: 10
  //     })
  // ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    db.Properties.findOne({
      where: {
        property_address: req.body.property_address
      }
    })
      .then(response => {
        if (!response) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Property does not exist" }] });
        }

        console.log(req.body);
        db.Properties.destroy({
          where: { property_address: req.body.property_address }
        })
          .then(r => {
            return res.send("Property deleted");
          })
          .catch(err => {
            console.error(err);
            return res.status(500).json({ errors: err });
          });
      })
      .catch(e => {
        console.error(e);
        return res.status(500).json({ errors: e });
      });
  }
);

// ROUTE 8 ----------------------------------------------------------
// @route      DELETE api/landlord/delete/tenant
// @desc       landlord deletes tenant
// @access     private
router.delete(
  "/delete/tenant",
  // [
  //   check("first_name", "First name is required")
  //     .not()
  //     .isEmpty(),
  //   check("last_name", "Last name is required")
  //     .not()
  //     .isEmpty(),
  //   check("primary_phone", "Please use a valid phone number")
  //     .isNumeric()
  //     .isLength({
  //       min: 10
  //     }),
  //   check("primary_email", "Please use a valid email address").isEmail()
  // ],
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
            .json({ errors: [{ msg: "Tenant does not exist" }] });
        }

        console.log(req.body);
        db.Tenants.destroy({
          where: { primary_email: req.body.primary_email }
        })
          .then(r => {
            return res.send("Tenant deleted");
          })
          .catch(err => {
            console.error(err);
            return res.status(500).json({ errors: err });
          });
      })
      .catch(e => {
        console.error(e);
        return res.status(500).json({ errors: e });
      });
  }
);

// ROUTE 9 ----------------------------------------------------------
// @route      GET api/landlord/find/tickets
// @desc       landlord gets all tickets for viewing
// @access     private
router.get("/find/tickets", (req, res) => {
  db.Tickets.findAll({})
    .then(response => {
      if (!response) {
        return res.status(400).json({ errors: [{ msg: "No tickets exist" }] });
      }

      return res.status(200).send(response);
    })
    .catch(e => {
      console.error(e);
      return res.status(500).json({ errors: e });
    });
});

// ROUTE 10 ----------------------------------------------------------
// @route      PUT api/landlord/update/ticket
// @desc       landlord updates ticket status
// @access     private
router.put("/update/ticket", (req, res) => {
  db.Tickets.findOne({
    where: {
      request: req.body.request
    }
  })
    .then(response => {
      if (!response) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Ticket does not exist" }] });
      }

      console.log(req.body);
      db.Tickets.update(
        { status: req.body.status },
        { where: { request: req.body.request } }
      )
        .then(r => {
          return res.send("Ticket updated");
        })
        .catch(err => {
          console.error(err);
          return res.status(500).json({ errors: err });
        });
    })
    .catch(e => {
      console.error(e);
      return res.status(500).json({ errors: e });
    });
});

// ROUTE 11 ----------------------------------------------------------
// @route      GET api/landlord/find/tenants
// @desc       landlord gets all tenants for viewing
// @access     private
router.get("/find/tenants", (req, res) => {
  db.Tickets.findAll({
    where: {
      property_name: req.body.property_name
    }
  })
    .then(response => {
      if (!response) {
        return res.status(400).json({ errors: [{ msg: "No tenants exist" }] });
      }
      console.log(response);
      return res.status(200).send(response);
    })
    .catch(e => {
      console.error(e);
      return res.status(500).json({ errors: e });
    });
});

// ROUTE 12 ----------------------------------------------------------
// @route      PUT api/landlord/put/ticket/status/inprogress
// @desc       tenant gets tickets for viewing
// @access     private
router.put("/put/ticket/status/inprogress", (req, res) => {
  db.Tickets.findOne({
    where: {
      request: "Fix door"
    }
  })
    .then(response => {
      if (!response) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Ticket does not exist" }] });
      }

      console.log(req.body);
      db.Tickets.update(
        { status: "In progress" },
        { where: { request: "Fix door" } }
      )
        .then(r => {
          return res.send("Ticket updated");
        })
        .catch(err => {
          console.error(err);
          return res.status(500).json({ errors: err });
        });
    })
    .catch(e => {
      console.error(e);
      return res.status(500).json({ errors: e });
    });
});

// ROUTE 13 ----------------------------------------------------------
// @route      PUT api/landlord/put/ticket/status/done
// @desc       tenant gets tickets for viewing
// @access     private
router.put("/put/ticket/status/done", (req, res) => {
  db.Tickets.findOne({
    where: {
      request: "Fix door"
    }
  })
    .then(response => {
      if (!response) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Ticket does not exist" }] });
      }

      console.log(req.body);
      db.Tickets.update({ status: "Done" }, { where: { request: "Fix door" } })
        .then(r => {
          return res.send("Ticket updated");
        })
        .catch(err => {
          console.error(err);
          return res.status(500).json({ errors: err });
        });
    })
    .catch(e => {
      console.error(e);
      return res.status(500).json({ errors: e });
    });
});

module.exports = router;
