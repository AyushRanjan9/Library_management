const Book = require('../models/bookModel');

// Fetch all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new book
exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing book
exports.updateBook = async (req, res) => {
    try {
        const [updated] = await Book.update(req.body, { where: { BookID: req.params.id } });
        if (!updated) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const deleted = await Book.destroy({ where: { BookID: req.params.id } });
        if (!deleted) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search books by title or author
exports.searchBooks = async (req, res) => {
    const { query } = req.query;
    try {
        const books = await Book.findAll({
            where: {
                [Op.or]: [
                    { Title: { [Op.like]: `%${query}%` } },
                    { Author: { [Op.like]: `%${query}%` } }
                ]
            }
        });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
