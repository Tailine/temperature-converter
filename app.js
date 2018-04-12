// selects the inputs
var celsiusTemp = document.querySelector("#celsiusInput");
var fahrenheitTemp = document.querySelector("#fahrenheitInput");
var kelvinTemp = document.querySelector("#kelvinInput");

var celsius;
var fahrenheit;
var kelvin;

// oninput - occurss when a value of an input or textarea is changed 
celsiusTemp.oninput = convertCelsiusTemp; 
fahrenheitTemp.oninput = convertFahrenheitTemp;

function cleanInput() {
    celsiusTemp.value = "";
    fahrenheitTemp.value = "";
    kelvinTemp.value = "";
}

function convertCelsiusTemp() {  // temp in celsius is converted to kelvin and fahrenheit
    celsius = Number(celsiusTemp.value);
    fahrenheit = (1.8*celsius) + 32;
    kelvin = celsius + 273;    
    kelvinTemp.value = kelvin;
    fahrenheitTemp.value = fahrenheit;
    if(celsiusTemp.value == "") {
        cleanInput();
    }
}

function convertFahrenheitTemp() {
    fahrenheit = Number(fahrenheitTemp.value);    
    celsius = (fahrenheit - 32)/1.8;
    kelvin = celsius + 273;
    celsiusTemp.value = celsius;
    kelvinTemp.value = kelvin;
    if(fahrenheitTemp.value == "") {
        cleanInput();
    }
}

function convertKelvinTemp() {
    
    if(kelvinTemp.value == "") {
        cleanInput();
    }
}