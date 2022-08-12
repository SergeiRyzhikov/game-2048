import { addTile } from "./addTile"
import  { compare }  from "./compare"
import { checkLose, checkWin } from "./winLose"

const transfer = (lastArray, side) => {
    // shift all tiles to one side
    let newArray = []
    for (let i = 0; i < 4; i++) {
        let fourthArr = lastArray.slice(i*4, (i+1)*4).filter(n => n)
        if(side === 'left') {
            newArray = [...newArray, ...fourthArr, ...Array(4 - fourthArr.length).fill(0)]
        }
        if(side === 'right') {
            newArray = [...newArray, ...Array(4 - fourthArr.length).fill(0), ...fourthArr]
        }
        
    }
    return newArray
}


export const horizontal = (side, lastTiles, setModal, win, setWin, score, setScore, setScoreDifference) => {
    let arr = transfer(lastTiles, 'left')
    let scoreDifference = 0
    let newTiles = arr.map((n, i) => {
        if ((i+1) % 4 !== 0 && n === arr[i+1] && n) {
            arr[i+1] = 0
            scoreDifference += n*2
            setScore(score+n*2)
            return n*2
        } 
        else return n
    })
    setScoreDifference(scoreDifference)
    newTiles = transfer(newTiles, side)
    const [newIndex, newNumber, indexLength] = addTile(newTiles)
    if (!compare(newTiles, lastTiles)) {
        newTiles[newIndex] = newNumber

        if(checkLose(newTiles, indexLength)) {
            setModal({visible: true, type: 'lose'})
        }
    }
    if(!win) {
        if(checkWin(newTiles)) {
            setModal({visible: true, type: 'win'})
            setWin(true)
        }
    }
    

    return newTiles
}

export const changeOrientation = (array) => {
    let newArray = []
    for (let i = 0; i < 4; i++) {
        newArray.push(...[array[i], array[i+4], array[i+8], array[i+12]])
    }
    return newArray
}

export const saveTiles = (setTiles, tiles) => {
    setTiles(tiles)
    localStorage.setItem('tiles', tiles)
}
