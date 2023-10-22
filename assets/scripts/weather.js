const currentDate = dayjs().format('MMMM DD, YYYY');
console.log(currentDate);

function weatherGrab () {
let weatherApp = $('#weatherApp');
let weatherReport = $('#weatherReport');
console.log(weatherApp);
weatherApp.text(currentDate);
let currentLocation = "San Antonio,TX";
let targetDate = dayjs(currentDate).unix();
console.log(targetDate);

fetch('https://api.openweathermap.org/data/2.5/weather?q='+currentLocation+',us&APPID=e59d5aba827db96109ea6ce009719b60&units=imperial&dt='+targetDate)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let tempTemp = (data.main.temp);
        let roundedTemp = Math.round(tempTemp);
        let weatherCode = (data.weather[0].id)
        console.log(roundedTemp);
        console.log(weatherCode);
        if (weatherApp == 800) {
            weatherReport.text("I am located in " + currentLocation + ".  It is currently " + roundedTemp + " degrees and 🌞");
        } else if (weatherCode > 800 && weatherCode < 805) {
            weatherReport.text("I am located in " + currentLocation + ".  It is currently " + roundedTemp + " degrees and 🌤️"); 
        } else if (weatherCode > 499 && weatherCode < 521) {
            weatherReport.text("I am located in " + currentLocation + ".  It is currently " + roundedTemp + " degrees and 🌧️");
        } else if (weatherCode > 199 && weatherCode < 233) {
            weatherReport.text("I am located in " + currentLocation + ".  It is currently " + roundedTemp + " degrees and ⛈️");
        } else if (weatherCode > 599 && weatherCode < 623) {
            weatherReport.text("I am located in " + currentLocation + ".  It is currently " + roundedTemp + " degrees and 🌨️");
        } else if (weatherCode === 741) {
            weatherReport.text("I am located in " + currentLocation + ".  It is currently " + roundedTemp + " degrees and 🌫️");
        } else {
            weatherReport.text("I am located in " + currentLocation + ".  It is currently " + roundedTemp + " degrees and the weather is completely unknown");
        }
    });
}

weatherGrab();
