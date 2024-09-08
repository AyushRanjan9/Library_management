const Author = require('../models/authorModel');

// Fetch all authors
exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch an author by ID
exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id);
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new author
exports.createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing author
exports.updateAuthor = async (req, res) => {
    try {
        const [updated] = await Author.update(req.body, { where: { AuthorID: req.params.id } });
        if (!updated) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json({ message: 'Author updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an author
exports.deleteAuthor = async (req, res) => {
    try {
        const deleted = await Author.destroy({ where: { AuthorID: req.params.id } });
        if (!deleted) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json({ message: 'Author deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
