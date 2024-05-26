const car={
    make:"BMW",
    model:"unknown",
    year:2002
};

function displayCarProperty(car){
    for(const property in car){
        console.log(`${property}:${car[property]}`)
    }
}
displayCarProperty(car);