const AuditLog = require('../models/auditLogModel');

// Fetch all audit logs
exports.getAllAuditLogs = async (req, res) => {
    try {
        const auditLogs = await AuditLog.findAll();
        res.status(200).json(auditLogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch an audit log by ID
exports.getAuditLogById = async (req, res) => {
    try {
        const auditLog = await AuditLog.findByPk(req.params.id);
        if (!auditLog) return res.status(404).json({ message: 'Audit log not found' });
        res.status(200).json(auditLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new audit log
exports.createAuditLog = async (req, res) => {
    try {
        const auditLog = await AuditLog.create(req.body);
        res.status(201).json(auditLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an audit log
exports.deleteAuditLog = async (req, res) => {
    try {
        const deleted = await AuditLog.destroy({ where: { AuditID: req.params.id } });
        if (!deleted) return res.status(404).json({ message: 'Audit log not found' });
        res.status(200).json({ message: 'Audit log deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
