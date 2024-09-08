const publisherModel = require('../models/publisherModel');

// Fetch all publishers
exports.getAllPublishers = async (req, res) => {
    try {
        const publishers = await publisherModel.getAllPublishers();
        res.status(200).json(publishers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a publisher by ID
exports.getPublisherById = async (req, res) => {
    try {
        const publisher = await publisherModel.getPublisherById(req.params.id);
        if (!publisher) return res.status(404).json({ message: 'Publisher not found' });
        res.status(200).json(publisher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new publisher
exports.createPublisher = async (req, res) => {
    try {
        const result = await publisherModel.createPublisher(req.body);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing publisher
exports.updatePublisher = async (req, res) => {
    try {
        const result = await publisherModel.updatePublisher(req.params.id, req.body);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Publisher not found' });
        res.status(200).json({ message: 'Publisher updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a publisher
exports.deletePublisher = async (req, res) => {
    try {
        const result = await publisherModel.deletePublisher(req.params.id);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Publisher not found' });
        res.status(200).json({ message: 'Publisher deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
