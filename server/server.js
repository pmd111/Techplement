const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Ensure the database file is in the correct location
const dbPath = path.join(__dirname, 'quotes.db'); // Absolute path
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
    } else {
        console.log("Connected to SQLite database.");
        db.run(`CREATE TABLE IF NOT EXISTS quotes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            quote TEXT NOT NULL,
            author TEXT NOT NULL
        )`);
    }
});

// Get a random quote
app.get('/random-quote', (req, res) => {
    db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', [], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(row || {});
    });
});

// Search quotes by author
app.get('/quotes', (req, res) => {
    const { author } = req.query;
    if (!author) return res.status(400).json({ error: 'Author name required' });

    db.all('SELECT * FROM quotes WHERE author LIKE ?', [`%${author}%`], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
