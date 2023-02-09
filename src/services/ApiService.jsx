import formatToLocalTime from '../functions/TimeFormat'



const API_KEY = "1b8bb04b1b223e343e9f05089e88251e";
const BASE_URL = "https://api.openweathermap.org/data";

// https://api.openweathermap.org/data
// /3.0/onecall?lat=54.6892&lon=25.2798&exclude=alert&appid=1b8bb04b1b223e343e9f05089e88251e

const getData = async (infoType, searchParams) => {

    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url).then(response => response.json());
};


// Data deconstructed from first api directory for getting current weather 
const formatCurrentData = (data) => {
    const {
        coord: {lat, lon},
        weather,
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind: {speed},
        dt,
        sys: {country, sunrise, sunset},
        name,

    } = data

    const {main: info, description, icon} = weather[0];

    return {lat, lon, country, temp, feels_like, temp_min, temp_max, pressure, humidity, speed, sunrise, sunset, dt, name, info, description, icon, day1: dt - 86400, day2: dt - 172800}
}

// 5 day forecast
const formatForcastData = (data) => {
    let {timezone, daily, current: {dt: currentTime}} = data;


    daily = daily.slice(1, 6).map(d => {
        return {
            time: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            pressure: d.pressure,
            icon: d.weather[0].icon
        }
    })
    return {timezone, daily, currentTime}
}


// current date -1
const formatHistoryData = (info) => {
    let {timezone, data} = info

    data = data.slice(0,2).map(d => {
        return {
            time: formatToLocalTime(d.dt, timezone, 'ccc, d LLL'),
            temp: d.temp,
            pressure: d.pressure,
            icon: d.weather[0].icon
        }
    })
    return {timezone, data};
}
// current date -2
const formatHistoryData2 = (info) => {
    let {timezone, data} = info

    let data2 = data

    data2 = data2.slice(0,2).map(d => {
        return {
            time: formatToLocalTime(d.dt, timezone, 'ccc, d LLL'),
            temp: d.temp,
            pressure: d.pressure,
            icon: d.weather[0].icon
        }
    })
    return {timezone, data2};
}


const getFormattedData = async (searchParams) => {
    
    try {
        const formattedCurrentData = await getData("2.5/weather", searchParams).then(formatCurrentData);

        const {lat, lon, day1, day2} = formattedCurrentData;

        const formattedForecastData = await getData("3.0/onecall", {
            lat,
            lon,
            units: 'metric',
            exclude: 'minutely, hourly, alerts'
        }).then(formatForcastData);


        // current date -1
        const formatedHistoryData = await getData("3.0/onecall/timemachine", {
            lat,
            lon,
            units: 'metric',
            dt: day1,
        }).then(formatHistoryData);
        // current date -2
        const formatedHistoryData2 = await getData("3.0/onecall/timemachine", {
            lat,
            lon,
            units: 'metric',
            dt: day2,
        }).then(formatHistoryData2);


        return {...formattedCurrentData, ...formattedForecastData, ...formatedHistoryData, ...formatedHistoryData2};
    } catch (error) {
        console.error("Error: getFormattedData")
        return error;
    }
}


export default getFormattedData;