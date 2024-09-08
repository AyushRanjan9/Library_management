const loanModel = require('../models/loanModel');
const bookModel = require('../models/bookModel');
const userModel = require('../models/userModel');

// Fetch all loans
exports.getAllLoans = async (req, res) => {
    try {
        const loans = await loanModel.getAllLoans();
        res.status(200).json(loans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a loan by ID
exports.getLoanById = async (req, res) => {
    try {
        const loan = await loanModel.getLoanById(req.params.id);
        if (!loan) return res.status(404).json({ message: 'Loan not found' });
        res.status(200).json(loan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new loan
exports.createLoan = async (req, res) => {
    try {
        const book = await bookModel.getBookById(req.body.BookID);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        if (book.AvailableCopies <= 0) {
            return res.status(400).json({ message: 'No available copies for this book' });
        }

        const result = await loanModel.createLoan(req.body);
        await bookModel.updateBookCopies(req.body.BookID, book.AvailableCopies - 1);

        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Return a book
exports.returnBook = async (req, res) => {
    try {
        const loan = await loanModel.getLoanById(req.params.id);
        if (!loan) return res.status(404).json({ message: 'Loan not found' });

        const book = await bookModel.getBookById(loan.BookID);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        await loanModel.updateLoanReturnDate(req.params.id);
        await bookModel.updateBookCopies(loan.BookID, book.AvailableCopies + 1);

        res.status(200).json({ message: 'Book returned successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a loan
exports.deleteLoan = async (req, res) => {
    try {
        const result = await loanModel.deleteLoan(req.params.id);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Loan not found' });
        res.status(200).json({ message: 'Loan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
