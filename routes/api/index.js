const router = require('express').Router();
const authRoutes = require('./auth');
const tenantRoutes = require('./tenant');
const landlordRoutes = require('./landlord');

// Auth routes
router.use('/auth', authRoutes);
router.use('/tenant', tenantRoutes);
router.use('/landlord', landlordRoutes);

module.exports = router;
