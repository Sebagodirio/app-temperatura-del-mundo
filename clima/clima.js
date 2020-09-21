const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4517ef76d2e88b051250a65087a706e9&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}