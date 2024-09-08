const LibraryBranch = require('../models/libraryBranchModel');

// Fetch all library branches
exports.getAllBranches = async (req, res) => {
    try {
        const branches = await LibraryBranch.findAll();
        res.status(200).json(branches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a library branch by ID
exports.getBranchById = async (req, res) => {
    try {
        const branch = await LibraryBranch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json(branch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new library branch
exports.createBranch = async (req, res) => {
    try {
        const branch = await LibraryBranch.create(req.body);
        res.status(201).json(branch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing library branch
exports.updateBranch = async (req, res) => {
    try {
        const [updated] = await LibraryBranch.update(req.body, { where: { BranchID: req.params.id } });
        if (!updated) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json({ message: 'Library branch updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a library branch
exports.deleteBranch = async (req, res) => {
    try {
        const deleted = await LibraryBranch.destroy({ where: { BranchID: req.params.id } });
        if (!deleted) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json({ message: 'Library branch deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const LibraryBranch = require('../models/libraryBranchModel');

// Fetch all library branches
exports.getAllBranches = async (req, res) => {
    try {
        const branches = await LibraryBranch.findAll();
        res.status(200).json(branches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a library branch by ID
exports.getBranchById = async (req, res) => {
    try {
        const branch = await LibraryBranch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json(branch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new library branch
exports.createBranch = async (req, res) => {
    try {
        const branch = await LibraryBranch.create(req.body);
        res.status(201).json(branch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing library branch
exports.updateBranch = async (req, res) => {
    try {
        const [updated] = await LibraryBranch.update(req.body, { where: { BranchID: req.params.id } });
        if (!updated) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json({ message: 'Library branch updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a library branch
exports.deleteBranch = async (req, res) => {
    try {
        const deleted = await LibraryBranch.destroy({ where: { BranchID: req.params.id } });
        if (!deleted) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json({ message: 'Library branch deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const LibraryBranch = require('../models/libraryBranchModel');

// Fetch all library branches
exports.getAllBranches = async (req, res) => {
    try {
        const branches = await LibraryBranch.findAll();
        res.status(200).json(branches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a library branch by ID
exports.getBranchById = async (req, res) => {
    try {
        const branch = await LibraryBranch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json(branch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new library branch
exports.createBranch = async (req, res) => {
    try {
        const branch = await LibraryBranch.create(req.body);
        res.status(201).json(branch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing library branch
exports.updateBranch = async (req, res) => {
    try {
        const [updated] = await LibraryBranch.update(req.body, { where: { BranchID: req.params.id } });
        if (!updated) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json({ message: 'Library branch updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a library branch
exports.deleteBranch = async (req, res) => {
    try {
        const deleted = await LibraryBranch.destroy({ where: { BranchID: req.params.id } });
        if (!deleted) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json({ message: 'Library branch deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const LibraryBranch = require('../models/libraryBranchModel');

// Fetch all library branches
exports.getAllBranches = async (req, res) => {
    try {
        const branches = await LibraryBranch.findAll();
        res.status(200).json(branches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a library branch by ID
exports.getBranchById = async (req, res) => {
    try {
        const branch = await LibraryBranch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json(branch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new library branch
exports.createBranch = async (req, res) => {
    try {
        const branch = await LibraryBranch.create(req.body);
        res.status(201).json(branch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing library branch
exports.updateBranch = async (req, res) => {
    try {
        const [updated] = await LibraryBranch.update(req.body, { where: { BranchID: req.params.id } });
        if (!updated) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json({ message: 'Library branch updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a library branch
exports.deleteBranch = async (req, res) => {
    try {
        const deleted = await LibraryBranch.destroy({ where: { BranchID: req.params.id } });
        if (!deleted) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json({ message: 'Library branch deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const LibraryBranch = require('../models/libraryBranchModel');

// Fetch all library branches
exports.getAllBranches = async (req, res) => {
    try {
        const branches = await LibraryBranch.findAll();
        res.status(200).json(branches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a library branch by ID
exports.getBranchById = async (req, res) => {
    try {
        const branch = await LibraryBranch.findByPk(req.params.id);
        if (!branch) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json(branch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new library branch
exports.createBranch = async (req, res) => {
    try {
        const branch = await LibraryBranch.create(req.body);
        res.status(201).json(branch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing library branch
exports.updateBranch = async (req, res) => {
    try {
        const [updated] = await LibraryBranch.update(req.body, { where: { BranchID: req.params.id } });
        if (!updated) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json({ message: 'Library branch updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a library branch
exports.deleteBranch = async (req, res) => {
    try {
        const deleted = await LibraryBranch.destroy({ where: { BranchID: req.params.id } });
        if (!deleted) return res.status(404).json({ message: 'Library branch not found' });
        res.status(200).json({ message: 'Library branch deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
