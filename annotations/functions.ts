const add = (a: number, b: number): number => {
    return a + b
}

const subtrack = (a: number, b: number): number => {
    return a - b
}

const divide (a: number, b: number): number {
    return a / b
}

//annotation for anonymous functi
const multiply = function (a: number, b: number): number { on
    return a * b
}

const logger = (message: string): void => {  // Void means function that's going to not return anything.
    console.log(message)
}

const throwError = (message: string): never => {  // exit the function early without returning any value.
    throw new Error(message)
}

const throwError = (message: string): string => { 
    if (!message) {
        throw new Error(message)        
    }

    return message
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(forecast.date)
    console.log(forecast.weather)    
}
// ======>>>  Destructuring with Annotations
const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
    console.log(date)
    console.log(weather)    
}

logWeather(todaysWeather)