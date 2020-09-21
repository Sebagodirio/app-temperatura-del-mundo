const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')


const getInfo = async direccion => {

    try {
        const coord = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coord.lat, coord.lng)

        return `El clima de ${direccion} es de ${temp} grados centigrados`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)