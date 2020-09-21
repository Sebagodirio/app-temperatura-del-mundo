const axios = require('axios');

const getLugarLatLng = async dir => {
    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=4517ef76d2e88b051250a65087a706e9`,

    })

    const resp = await instance.get()

    if (resp.status == 400) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}