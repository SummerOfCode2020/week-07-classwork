const bird = {
    singin: true,
    melodies: 'pure and true',
    size: 'little',
    stats: {
        fastestFlights: [],
        highestAltitude: '20,000ft'
    }
}

for (let key in bird) {
    const value = bird[key]
    const valueDataType = typeof value
    
    if (valueDataType === 'object') {
        //console.log({key, valueDataType, value})
        for (let nestedKey in value) {
            console.log({nestedKey})
        }

    }
    
}

// console.log({ bird })