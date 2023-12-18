const express = require('express');
const router = express.Router();
const db = require('../db');

// notifID
// userID
// message
// seen

// GET all notifs
router.get('/', (req, res) => {
    db.query('SELECT * FROM notif', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching notifs' });
            return;
        }
        res.json(results);
    });
});

module.exports = router;