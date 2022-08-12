import { getRandom } from "./getRandom"

export const addTile = (tiles) => {
    const newTile = (getRandom(1, 10) === 1) ? 4 : 2
    let indexies = []
    tiles.forEach((n, i)=> {
        if(n === 0) {indexies.push(i)}
    })     
    return [indexies[getRandom(0, indexies.length)], newTile, indexies.length]

}