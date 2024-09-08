const pool = require('../utils/db');

// Create a Loan
async function createLoan(loan) {
    const sql = `
        INSERT INTO Loans (BookID, UserID, LoanDate, DueDate, ReturnDate)
        VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
        loan.BookID,
        loan.UserID,
        loan.LoanDate,
        loan.DueDate,
        loan.ReturnDate || null
    ]);
    return result;
}

// Get a Loan by ID
async function getLoanById(loanId) {
    const sql = `SELECT * FROM Loans WHERE LoanID = ?`;
    const [rows] = await pool.execute(sql, [loanId]);
    return rows[0];
}

// Update a Loan by ID
async function updateLoan(loanId, loan) {
    const sql = `
        UPDATE Loans 
        SET BookID = ?, UserID = ?, LoanDate = ?, DueDate = ?, ReturnDate = ?
        WHERE LoanID = ?
    `;
    const [result] = await pool.execute(sql, [
        loan.BookID,
        loan.UserID,
        loan.LoanDate,
        loan.DueDate,
        loan.ReturnDate || null,
        loanId
    ]);
    return result;
}

// Delete a Loan by ID
async function deleteLoan(loanId) {
    const sql = `DELETE FROM Loans WHERE LoanID = ?`;
    const [result] = await pool.execute(sql, [loanId]);
    return result;
}

// Get all Loans
async function getAllLoans() {
    const sql = `SELECT * FROM Loans`;
    const [rows] = await pool.query(sql);
    return rows;
}

module.exports = {
    createLoan,
    getLoanById,
    updateLoan,
    deleteLoan,
    getAllLoans
};
