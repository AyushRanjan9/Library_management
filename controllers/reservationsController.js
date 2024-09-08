const reservationModel = require('../models/reservationModel');
const bookModel = require('../models/bookModel');
const userModel = require('../models/userModel');

// Fetch all reservations
exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await reservationModel.getAllReservations();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a reservation by ID
exports.getReservationById = async (req, res) => {
    try {
        const reservation = await reservationModel.getReservationById(req.params.id);
        if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new reservation
exports.createReservation = async (req, res) => {
    try {
        const book = await bookModel.getBookById(req.body.BookID);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        const user = await userModel.getUserById(req.body.UserID);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const result = await reservationModel.createReservation(req.body);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing reservation
exports.updateReservation = async (req, res) => {
    try {
        const result = await reservationModel.updateReservation(req.params.id, req.body);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Reservation not found' });
        res.status(200).json({ message: 'Reservation updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cancel a reservation
exports.cancelReservation = async (req, res) => {
    try {
        const result = await reservationModel.updateReservation(req.params.id, { Status: 'Cancelled' });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Reservation not found' });
        res.status(200).json({ message: 'Reservation cancelled successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a reservation
exports.deleteReservation = async (req, res) => {
    try {
        const result = await reservationModel.deleteReservation(req.params.id);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Reservation not found' });
        res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
