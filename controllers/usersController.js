const userModel = require('../models/userModel');

// Fetch all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const result = await userModel.createUser(req.body);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing user
exports.updateUser = async (req, res) => {
    try {
        const result = await userModel.updateUser(req.params.id, req.body);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Deactivate a user
exports.deactivateUser = async (req, res) => {
    try {
        const result = await userModel.updateUser(req.params.id, { IsActive: false });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deactivated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const result = await userModel.deleteUser(req.params.id);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
