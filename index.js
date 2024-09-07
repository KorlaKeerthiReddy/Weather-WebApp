var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Fixed variable name
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "e869b1ac8b4f95956b908a606c7fe02e";

function conversion(val) {
    return (val - 273.15).toFixed(2); // Corrected conversion
}

btn.addEventListener('click', function() {
    var cityName = inputvalue.value;
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apik;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var tempature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(tempature)} C</span>`;
            description.innerHTML = `Sky conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind speed: <span>${wndspeed} km/h</span>`;
        })
        .catch(err => alert('You entered wrong city name'));
});
