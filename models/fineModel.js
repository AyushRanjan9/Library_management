const pool = require('../utils/db');

// Create a Fine
async function createFine(fine) {
    const sql = `
        INSERT INTO Fines (LoanID, FineAmount, FineDate, Paid)
        VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
        fine.LoanID,
        fine.FineAmount,
        fine.FineDate,
        fine.Paid || false
    ]);
    return result;
}

// Get a Fine by ID
async function getFineById(fineId) {
    const sql = `SELECT * FROM Fines WHERE FineID = ?`;
    const [rows] = await pool.execute(sql, [fineId]);
    return rows[0];
}

// Update a Fine by ID
async function updateFine(fineId, fine) {
    const sql = `
        UPDATE Fines 
        SET LoanID = ?, FineAmount = ?, FineDate = ?, Paid = ?
        WHERE FineID = ?
    `;
    const [result] = await pool.execute(sql, [
        fine.LoanID,
        fine.FineAmount,
        fine.FineDate,
        fine.Paid,
        fineId
    ]);
    return result;
}

// Delete a Fine by ID
async function deleteFine(fineId) {
    const sql = `DELETE FROM Fines WHERE FineID = ?`;
    const [result] = await pool.execute(sql, [fineId]);
    return result;
}

// Get all Fines
async function getAllFines() {
    const sql = `SELECT * FROM Fines`;
    const [rows] = await pool.query(sql);
    return rows;
}

module.exports = {
    createFine,
    getFineById,
    updateFine,
    deleteFine,
    getAllFines
};
