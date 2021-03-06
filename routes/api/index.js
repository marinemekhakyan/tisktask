const router = require("express").Router();
const authRoutes = require("./auth");
const tenantRoutes = require("./tenant");
const landlordRoutes = require("./landlord");
const ticketRoutes = require("./tickets");

// routes
router.use("/auth", authRoutes);
router.use("/tenant", tenantRoutes);
router.use("/landlord", landlordRoutes);
router.use("/unit", ticketRoutes);

module.exports = router;
