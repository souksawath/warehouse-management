const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Warehouse Management API!');
});

app.get('/api/items', (req, res) => {
    res.json({ message: 'List of items' });
});

app.post('/api/items', (req, res) => {
    res.json({ message: 'Item added', item: req.body });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});