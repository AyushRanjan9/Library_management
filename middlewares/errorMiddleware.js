
// Middleware for centralized error handling
module.exports = (err, req, res, next) => {
    console.error('Error occurred:', err.stack);
    res.status(500).send('Internal Server Error');
};
