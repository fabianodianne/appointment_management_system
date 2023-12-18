const express = require('express');
const router = express.Router();
const db = require('../db');

// eventID
// title
// description
// location
// date
// startTime
// endTime

// GET all events
router.get('/', (req, res) => {
    db.query('SELECT * FROM event', (err, results) => {
        if(err) {
            res.status(500).json({error: 'Error fetching events'});
            return;
        }
        res.json(results);
    });
});

module.exports = router;