
const logger = require('winston');

logger.configure({
    transports: [
        new logger.transports.Console()
    ]
});

module.exports = logger;
