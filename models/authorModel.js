const pool = require('../utils/db');

// Create an Author
async function createAuthor(author) {
    const sql = `
        INSERT INTO Authors (AuthorName, Biography, BirthDate, Nationality)
        VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
        author.AuthorName,
        author.Biography || null,
        author.BirthDate || null,
        author.Nationality || null
    ]);
    return result;
}

// Get an Author by ID
async function getAuthorById(authorId) {
    const sql = `SELECT * FROM Authors WHERE AuthorID = ?`;
    const [rows] = await pool.execute(sql, [authorId]);
    return rows[0];
}

// Update an Author by ID
async function updateAuthor(authorId, author) {
    const sql = `
        UPDATE Authors 
        SET AuthorName = ?, Biography = ?, BirthDate = ?, Nationality = ?
        WHERE AuthorID = ?
    `;
    const [result] = await pool.execute(sql, [
        author.AuthorName,
        author.Biography || null,
        author.BirthDate || null,
        author.Nationality || null,
        authorId
    ]);
    return result;
}

// Delete an Author by ID
async function deleteAuthor(authorId) {
    const sql = `DELETE FROM Authors WHERE AuthorID = ?`;
    const [result] = await pool.execute(sql, [authorId]);
    return result;
}

// Get all Authors
async function getAllAuthors() {
    const sql = `SELECT * FROM Authors`;
    const [rows] = await pool.query(sql);
    return rows;
}

module.exports = {
    createAuthor,
    getAuthorById,
    updateAuthor,
    deleteAuthor,
    getAllAuthors
};
