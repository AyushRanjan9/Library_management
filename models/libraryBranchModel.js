const pool = require('../utils/db');

// Create a Library Branch
async function createLibraryBranch(branch) {
    const sql = `
        INSERT INTO LibraryBranches (BranchName, Location, ContactNumber)
        VALUES (?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
        branch.BranchName,
        branch.Location,
        branch.ContactNumber
    ]);
    return result;
}

// Get a Library Branch by ID
async function getLibraryBranchById(branchId) {
    const sql = `SELECT * FROM LibraryBranches WHERE BranchID = ?`;
    const [rows] = await pool.execute(sql, [branchId]);
    return rows[0];
}

// Update a Library Branch by ID
async function updateLibraryBranch(branchId, branch) {
    const sql = `
        UPDATE LibraryBranches 
        SET BranchName = ?, Location = ?, ContactNumber = ?
        WHERE BranchID = ?
    `;
    const [result] = await pool.execute(sql, [
        branch.BranchName,
        branch.Location,
        branch.ContactNumber,
        branchId
    ]);
    return result;
}

// Delete a Library Branch by ID
async function deleteLibraryBranch(branchId) {
    const sql = `DELETE FROM LibraryBranches WHERE BranchID = ?`;
    const [result] = await pool.execute(sql, [branchId]);
    return result;
}

// Get all Library Branches
async function getAllLibraryBranches() {
    const sql = `SELECT * FROM LibraryBranches`;
    const [rows] = await pool.query(sql);
    return rows;
}

module.exports = {
    createLibraryBranch,
    getLibraryBranchById,
    updateLibraryBranch,
    deleteLibraryBranch,
    getAllLibraryBranches
};
