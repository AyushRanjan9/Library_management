const pool = require('../utils/db');

// Create a Publisher
async function createPublisher(publisher) {
    const sql = `
        INSERT INTO Publishers (PublisherName, Address, ContactNumber)
        VALUES (?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
        publisher.PublisherName,
        publisher.Address,
        publisher.ContactNumber
    ]);
    return result;
}

// Get a Publisher by ID
async function getPublisherById(publisherId) {
    const sql = `SELECT * FROM Publishers WHERE PublisherID = ?`;
    const [rows] = await pool.execute(sql, [publisherId]);
    return rows[0];
}

// Update a Publisher by ID
async function updatePublisher(publisherId, publisher) {
    const sql = `
        UPDATE Publishers 
        SET PublisherName = ?, Address = ?, ContactNumber = ?
        WHERE PublisherID = ?
    `;
    const [result] = await pool.execute(sql, [
        publisher.PublisherName,
        publisher.Address,
        publisher.ContactNumber,
        publisherId
    ]);
    return result;
}

// Delete a Publisher by ID
async function deletePublisher(publisherId) {
    const sql = `DELETE FROM Publishers WHERE PublisherID = ?`;
    const [result] = await pool.execute(sql, [publisherId]);
    return result;
}

// Get all Publishers
async function getAllPublishers() {
    const sql = `SELECT * FROM Publishers`;
    const [rows] = await pool.query(sql);
    return rows;
}

module.exports = {
    createPublisher,
    getPublisherById,
    updatePublisher,
    deletePublisher,
    getAllPublishers
};
