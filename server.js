const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');  

const app = express();
const port = 3000;

app.use(cors());  

app.get('/alerts', async (req, res) => {
    const url = 'https://api.alerts.in.ua/v1/iot/active_air_raid_alerts_by_oblast.json?token=28727fbffb2c23dddd794f1f28b62c2079a218a6ab2203';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Помилка HTTP: ' + response.status);
        }
        const data = await response.text();
        res.send(data); 
    } catch (error) {
        res.status(500).send('Помилка запиту: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});
