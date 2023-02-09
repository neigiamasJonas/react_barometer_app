import React from 'react'
import { UilTemperatureHalf, UilTear, UilWindsock, UilSun, UilSunset } from '@iconscout/react-unicons'

function TempAndOther() {
  return (
    <div>
        <div className="flex flex-row justify-around items-center text-white mt-2 py-2">
            <div>
                <p>Presure scale</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-sm font-extralight">descriptionnnnnnnnnnnnn</p>
                <p className="text-4xl mt-2">25°</p>
            </div>      
            <div className="flex flex-col space-y-1 pt-3">
                <div className="flex font-extralight text-xs items-center justify-start">
                    <UilTemperatureHalf size="12" className="mr-1" />
                    <p className="mr-1">Real feel:</p>
                    <span className="font-medium">20°</span>
                </div>
                <div className="flex font-extralight text-xs items-center justify-start">
                    <UilTear size="12" className="mr-1" />
                    <p className="mr-1">Humidity:</p>
                    <span className="font-medium">20%</span>
                </div>
                <div className="flex font-extralight text-xs items-center justify-start">
                    <UilWindsock size="12" className="mr-1" />
                    <p className="mr-1">Wind:</p>
                    <span className="font-medium">20km/h</span>
                </div>
            </div>
        </div>

        <div className="flex flex-row justify-center items-center space-x-1 text-white text-xs pt-3">
            <UilSun size="16"/>
            <p className="font-extralight">Rise:</p>
            <span className="font-light ml-1">06:23</span>
            <p className="font-light">|</p>


            <UilSunset size="16"/>
            <p className="font-extralight">Set:</p>
            <span className="font-light ml-1">19:23</span>
        </div>
    </div>
  )
}

export default TempAndOther