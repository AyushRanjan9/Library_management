const pool = require('../utils/db');

// Create a Reservation
async function createReservation(reservation) {
  const sql = `
    INSERT INTO Reservations (BookID, UserID, ReservationDate, Status)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await pool.execute(sql, [
    reservation.BookID,
    reservation.UserID,
    reservation.ReservationDate,
    reservation.Status || 'Pending'
  ]);
  return result;
}

// Get a Reservation by ID
async function getReservationById(reservationId) {
  const sql = `SELECT * FROM Reservations WHERE ReservationID = ?`;
  const [rows] = await pool.execute(sql, [reservationId]);
  return rows[0];
}

// Update a Reservation by ID
async function updateReservation(reservationId, reservation) {
  const sql = `
    UPDATE Reservations 
    SET BookID = ?, UserID = ?, ReservationDate = ?, Status = ?
    WHERE ReservationID = ?
  `;
  const [result] = await pool.execute(sql, [
    reservation.BookID,
    reservation.UserID,
    reservation.ReservationDate,
    reservation.Status,
    reservationId
  ]);
  return result;
}

// Delete a Reservation by ID
async function deleteReservation(reservationId) {
  const sql = `DELETE FROM Reservations WHERE ReservationID = ?`;
  const [result] = await pool.execute(sql, [reservationId]);
  return result;
}

// Get all Reservations
async function getAllReservations() {
  const sql = `SELECT * FROM Reservations`;
  const [rows] = await pool.query(sql);
  return rows;
}

module.exports = {
  createReservation,
  getReservationById,
  updateReservation,
  deleteReservation,
  getAllReservations
};
