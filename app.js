const express = require('express');
const app = express();

// Import routes
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const fineRoutes = require('./routes/fineRoutes');
const libraryBranchRoutes = require('./routes/libraryBranchRoutes');
const loanRoutes = require('./routes/loanRoutes');
const publisherRoutes = require('./routes/publisherRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const userRoutes = require('./routes/userRoutes');
const auditLogRoutes = require('./routes/auditLogRoutes');

// Import middleware
const errorMiddleware = require('./middlewares/errorMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');

// Middleware for parsing JSON and authentication
app.use(express.json());
app.use(authMiddleware);

// Define routes
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/categories', categoryRoutes);
app.use('/fines', fineRoutes);
app.use('/branches', libraryBranchRoutes);
app.use('/loans', loanRoutes);
app.use('/publishers', publisherRoutes);
app.use('/reservations', reservationRoutes);
app.use('/users', userRoutes);
app.use('/audit-logs', auditLogRoutes);

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
