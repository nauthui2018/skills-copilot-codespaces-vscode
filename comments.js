// Create web server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Sample comments data
let comments = [
    { id: 1, author: 'John', text: 'Great post!', timestamp: new Date() },
    { id: 2, author: 'Jane', text: 'Thanks for sharing!', timestamp: new Date() }
];

// Routes
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

app.post('/api/comments', (req, res) => {
    const { author, text } = req.body;
    const newComment = {
        id: comments.length + 1,
        author,
        text,
        timestamp: new Date()
    };
    comments.push(newComment);
    res.status(201).json(newComment);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
