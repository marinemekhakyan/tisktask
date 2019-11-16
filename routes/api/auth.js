const router = require("express").Router();
const authController = require("../../controllers/authController");

// ROUTE 1 ----------------------------------------------------------
// @route      GET api/auth/session/:sid
// @desc       authenticate user to protect private routes
// @access     private
router.route("/session/:sid").get(authController.validateSession);

// ROUTE 2 ----------------------------------------------------------
// @route      DELETE api/auth/
// @desc       end user session on logout
// @access     private
router.route("/").delete(authController.logout);

// Matches with '/api/auth/register'
// router.route('/register')
//   .post(authController.register);

// Matches with '/api/auth/login'
// router.route('/login')
//   .post(authController.login);

module.exports = router;
