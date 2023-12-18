const express = require('express');
const router = express.Router();
const db = require('../db');

// attendeeID
// eventID
// userID
// responseStatus

// GET all attendee
router.get('/', (req, res) => {
    db.query('SELECT * FROM attendee', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching attendees' });
            return;
        }
        res.json(results);
    });
});

module.exports = router;