module.exports.getWeather = function (error, response, body) {
    if (response.statusCode !== 200){
        console.log('Something went wrong - weather');
    } else {
        let temperature = JSON.parse(body);
        console.log('temperature:', Math.round(temperature.main.temp - 273.5), 'degrees Celsius');
    }
};

