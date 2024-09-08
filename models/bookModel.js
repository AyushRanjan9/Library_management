const pool = require('../utils/db');

// Create a Book
async function createBook(book) {
    const sql = `
        INSERT INTO Books (ISBN, Title, Author, Publisher, PublicationYear, Category, TotalCopies, AvailableCopies)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
        book.ISBN,
        book.Title,
        book.Author,
        book.Publisher || null,
        book.PublicationYear || null,
        book.Category || null,
        book.TotalCopies,
        book.AvailableCopies
    ]);
    return result;
}

// Get a Book by ID
async function getBookById(bookId) {
    const sql = `SELECT * FROM Books WHERE BookID = ?`;
    const [rows] = await pool.execute(sql, [bookId]);
    return rows[0];
}

// Update a Book by ID
async function updateBook(bookId, book) {
    const sql = `
        UPDATE Books 
        SET ISBN = ?, Title = ?, Author = ?, Publisher = ?, PublicationYear = ?, Category = ?, TotalCopies = ?, AvailableCopies = ?
        WHERE BookID = ?
    `;
    const [result] = await pool.execute(sql, [
        book.ISBN,
        book.Title,
        book.Author,
        book.Publisher || null,
        book.PublicationYear || null,
        book.Category || null,
        book.TotalCopies,
        book.AvailableCopies,
        bookId
    ]);
    return result;
}

// Delete a Book by ID
async function deleteBook(bookId) {
    const sql = `DELETE FROM Books WHERE BookID = ?`;
    const [result] = await pool.execute(sql, [bookId]);
    return result;
}

// Get all Books
async function getAllBooks() {
    const sql = `SELECT * FROM Books`;
    const [rows] = await pool.query(sql);
    return rows;
}

module.exports = {
    createBook,
    getBookById,
    updateBook,
    deleteBook,
    getAllBooks
};
