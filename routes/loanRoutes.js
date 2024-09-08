const express = require('express');
const router = express.Router();
const loansController = require('../controllers/loansController');

router.get('/', loansController.getAllLoans);
router.get('/:id', loansController.getLoanById);
router.post('/', loansController.createLoan);
router.put('/:id/return', loansController.returnBook);
router.delete('/:id', loansController.deleteLoan);

module.exports = router;
