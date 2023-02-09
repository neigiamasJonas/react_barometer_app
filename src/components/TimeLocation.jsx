import React from 'react'

function TimeLocation() {
  return (
    <div>
        <div className="flex flex-row justify-center my-4">
            <p className="text-white text-sm font-extralight">
                Friday, september 2023, Local time: 16:50
            </p>
        </div>
        <div className="flex flex-row justify-center">
            <p className="text-white text-4xl font-medium">
                City
            </p>
        </div>
    </div>
  )
}

export default TimeLocation;