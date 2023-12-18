const express = require('express');
const router = express.Router();
const db = require('../db');

// userID
// name
// gmail

// GET all users
router.get('/', (req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching users' });
            return;
        }
        res.json(results);
    });
});

module.exports = router;