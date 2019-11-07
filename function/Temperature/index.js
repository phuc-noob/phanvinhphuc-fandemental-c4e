let celsius =prompt("current temperature -°C-")
function celsiusToFahrenheit(Celsius){
    let Fahrenheit=0
    Fahrenheit=(9*Celsius)/5 + 32
    console.log(`${Celsius}°C is ${Fahrenheit}°F`)
}
celsiusToFahrenheit(celsius)

let Fahrenheit=prompt("current temperature -°F-")
function FahrenheitToCelsius(Fahrenheit){
    let Celsius=0
    Celsius=(5/9) * (Fahrenheit - 32)
    console.log(`${Fahrenheit}°F is ${Celsius}°C`)
}
FahrenheitToCelsius(Fahrenheit)