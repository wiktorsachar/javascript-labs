module.exports.getUser = function (error, response, body) {
    if (response.statusCode !== 200){
        console.log('Something went wrong - user');
    } else {
        let user = JSON.parse(body);
        console.log('name:', user.name, 'lat:', user.address.geo.lat, 'lng:', user.address.geo.lng);
        request(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}`, getWeather)
    }
};