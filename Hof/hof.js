function getmultiplier(multipler) {
    return function (aNumber) {
        return aNumber * multipler
    }
}

const double = getmultiplier(2)
const triple = getmultiplier(3)
const quadripler = getmultiplier(4) 

console.log(double(2))
console.log(triple(2))
console.log(quadripler(2))