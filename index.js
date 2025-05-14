const express = require('express');
const app = express();
const port = 3000;

// Middleware do parsowania JSON
app.use(express.json());

// Endpoint GET
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Tomasz' },
        { id: 2, name: 'Anna' }
    ]);
});

// Endpoint POST
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({
        message: 'Użytkownik dodany',
        user: newUser
    });
});

// Endpoint PUT
app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({
        message: `Użytkownik ${userId} zaktualizowany`,
        data: req.body
    });
});

// Endpoint DELETE
app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Użytkownik ${userId} usunięty` });
});

// Uruchom serwer
app.listen(port, () => {
    console.log(`API działa na http://localhost:${port}`);
});
