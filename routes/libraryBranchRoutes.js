const express = require('express');
const router = express.Router();
const libraryBranchesController = require('../controllers/libraryBranchesController');

router.get('/', libraryBranchesController.getAllBranches);
router.get('/:id', libraryBranchesController.getBranchById);
router.post('/', libraryBranchesController.createBranch);
router.put('/:id', libraryBranchesController.updateBranch);
router.delete('/:id', libraryBranchesController.deleteBranch);

module.exports = router;
