const pool = require('../utils/db');

// Create a Category
async function createCategory(category) {
    const sql = `
        INSERT INTO Categories (CategoryName)
        VALUES (?)
    `;
    const [result] = await pool.execute(sql, [category.CategoryName]);
    return result;
}

// Get a Category by ID
async function getCategoryById(categoryId) {
    const sql = `SELECT * FROM Categories WHERE CategoryID = ?`;
    const [rows] = await pool.execute(sql, [categoryId]);
    return rows[0];
}

// Update a Category by ID
async function updateCategory(categoryId, category) {
    const sql = `
        UPDATE Categories 
        SET CategoryName = ?
        WHERE CategoryID = ?
    `;
    const [result] = await pool.execute(sql, [
        category.CategoryName,
        categoryId
    ]);
    return result;
}

// Delete a Category by ID
async function deleteCategory(categoryId) {
    const sql = `DELETE FROM Categories WHERE CategoryID = ?`;
    const [result] = await pool.execute(sql, [categoryId]);
    return result;
}

// Get all Categories
async function getAllCategories() {
    const sql = `SELECT * FROM Categories`;
    const [rows] = await pool.query(sql);
    return rows;
}

module.exports = {
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getAllCategories
};
