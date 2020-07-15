/**
    Shared data / Shared state / Idempotent i·dumb·po'·tent

    Given the same data values as parameters may not always return the same result.

    Uses variables that other functions and code use.
    
    The starting data and ending data are not predictable for a single given function since it uses things out of it's control.

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