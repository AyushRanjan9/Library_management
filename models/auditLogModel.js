const pool = require('../utils/db');

// Create an AuditLog entry
async function createAuditLog(auditLog) {
    const sql = `
        INSERT INTO AuditLog (Action, UserID, Timestamp)
        VALUES (?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
        auditLog.Action,
        auditLog.UserID,
        auditLog.Timestamp || new Date() // Default to current time if not provided
    ]);
    return result;
}

// Get an AuditLog entry by ID
async function getAuditLogById(auditId) {
    const sql = `SELECT * FROM AuditLog WHERE AuditID = ?`;
    const [rows] = await pool.execute(sql, [auditId]);
    return rows[0];
}

// Get all AuditLog entries
async function getAllAuditLogs() {
    const sql = `SELECT * FROM AuditLog`;
    const [rows] = await pool.query(sql);
    return rows;
}

// Delete an AuditLog entry by ID
async function deleteAuditLog(auditId) {
    const sql = `DELETE FROM AuditLog WHERE AuditID = ?`;
    const [result] = await pool.execute(sql, [auditId]);
    return result;
}

module.exports = {
    createAuditLog,
    getAuditLogById,
    getAllAuditLogs,
    deleteAuditLog
};
