const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Bismillahir Rahmanir Rahim! ML-11-Module-68'));

app.listen(port, () => console.log(`Server is running from port: ${port}`));