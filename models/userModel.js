const pool = require('../utils/db');

// Create a User
async function createUser(user) {
  const sql = `
    INSERT INTO Users (FirstName, LastName, Email, PhoneNumber, Address, UserRole, DateJoined, IsActive)
    VALUES (?, ?, ?, ?, ?, ?, NOW(), ?)
  `;
  const [result] = await pool.execute(sql, [
    user.FirstName,
    user.LastName,
    user.Email,
    user.PhoneNumber,
    user.Address,
    user.UserRole,
    user.IsActive || true
  ]);
  return result;
}

// Get a User by ID
async function getUserById(userId) {
  const sql = `SELECT * FROM Users WHERE UserID = ?`;
  const [rows] = await pool.execute(sql, [userId]);
  return rows[0];
}

// Update a User by ID
async function updateUser(userId, user) {
  const sql = `
    UPDATE Users 
    SET FirstName = ?, LastName = ?, Email = ?, PhoneNumber = ?, Address = ?, UserRole = ?, IsActive = ?
    WHERE UserID = ?
  `;
  const [result] = await pool.execute(sql, [
    user.FirstName,
    user.LastName,
    user.Email,
    user.PhoneNumber,
    user.Address,
    user.UserRole,
    user.IsActive,
    userId
  ]);
  return result;
}

// Delete a User by ID
async function deleteUser(userId) {
  const sql = `DELETE FROM Users WHERE UserID = ?`;
  const [result] = await pool.execute(sql, [userId]);
  return result;
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
