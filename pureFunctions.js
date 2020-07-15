/**
    Pure functions. Data in, data out, nothing else changed.
 
    Given the same input parameter values, always returns the same result.

    Does not update databases.

 */

// `vehicles` is in a shared scope and is accessible to functions in this file
let vehicles = []

function addTruckToInventory (truck) {
    // `vehicles` is not declared in this function. The shared `vehicles` is being updated
    truck.type = 'truck'
    vehicles.push(truck)
}

function addCarToInventory (car) {
    // `vehicles` is not declared in this function. The shared `vehicles` is being updated
    car.type = 'car'
    vehicles.push(car)
}

addTruckToInventory({
    make: 'GMC',
    model: 'Sierra',
    serialNumber: '3GTP1NEC5JG101771'
})

addCarToInventory({
    make: 'Tesla',
    model: '3',
    serialNumber: '5YJ3E1EAXHF000316'
})

console.log( {vehicles} )