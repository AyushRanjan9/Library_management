const express = require('express');
const router = express.Router();
const finesController = require('../controllers/finesController');

router.get('/', finesController.getAllFines);
router.get('/:id', finesController.getFineById);
router.post('/', finesController.createFine);
router.put('/:id/pay', finesController.payFine);
router.delete('/:id', finesController.deleteFine);

module.exports = router;
