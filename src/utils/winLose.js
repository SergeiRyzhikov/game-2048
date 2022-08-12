import { changeOrientation } from "./pressKeys"

const arrayCheck = (array) => {
    for (let i = 0; i < 16; i++){
        if ((i+1) % 4 !== 0 && array[i] && array[i] === array[i+1]) return false
    }
    return true
}

export const checkLose = (tiles, length) => {
    if (length === 1) {
        if(arrayCheck(tiles)) {
            return arrayCheck(changeOrientation(tiles))
        }
        return false
    }
    return false
}

export const checkWin = (tiles) => {
    for(let i = 0; i < 16; i++) {
        if (tiles[i] === 2048) {
            return true
        }
    }
    return false
}
