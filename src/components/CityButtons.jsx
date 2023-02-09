import React from 'react'

function CityButtons() {

    const cities = [
        {
            id: 1,
            name: "Vilnius"
        },
        {
            id: 2,
            name: "Nida"
        },
        {
            id: 3,
            name: "Kaunas"
        },
        {
            id: 4,
            name: "Panevežys"
        },
        {
            id: 5,
            name: "Šiauliai"
        },
    ]
  return (
    <div className="flex items-center justify-around">
        {
            cities.map(city => (
                <button className="text-white text-lg font-400 my-4" key={city.id}>{city.name}</button>
            ))
        }
    </div>
  )
}

export default CityButtons;