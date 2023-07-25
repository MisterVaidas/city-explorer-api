const express = require('express');
require('dotenv').config();
const cors = require('cors');

const weatherData = require('./data/weather.json');

class Forecast {
    constructor(date, description) {
        this.data = date;
        this.description = description;
    }
}

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8081;

app.get('/weather', (req, res) => {
    //console.log(weatherData);
    const lat = req.query.lat;
    const lon = req.query.lon;
    const searchQuery = req.query.searchQuery;

    const city = weatherData.find((city) => {
        return city.lat === Number(lat) && city.lon === Number(lon) && city.city_name.toLowerCase() === searchQuery.toLowerCase();
    });
    
    

    if (!city) {
        res.status(404).send('City not found');
    } else {
        //console.log(city);
        const forecast = city.data.map(data => {
            return new Forecast(data.date, data.description);
        });

        res.json(forecast);
    }
});


app.get('/', (req, res) => {
    res.send('Hello there!');
});

app.listen(PORT, () => console.log(`Listen on ${PORT}`));