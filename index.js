const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/welcome', (req, res) => {
    res.send('Arriba yo, mi apa y los pumas');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
