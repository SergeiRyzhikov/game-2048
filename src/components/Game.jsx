
import React, { useEffect, useRef, useState } from 'react'
import { addTile } from '../utils/addTile'
import { changeOrientation, horizontal, saveTiles } from '../utils/pressKeys'
import { checkMove } from '../utils/touches'
import GameMessage from './GameMessage'
import MyButton from './UI/myButton/MyButton'
import MyModal from './UI/myModal/MyModal'
import Tile from './UI/tile/Tile'

function Game({tiles, setTiles, startGame, win, setWin, score, setScore, setScoreDifference}) {
    const [modal, setModal] = useState({visible: false, type: ''})

    const [position, setPosition] = useState({x: 0, y: 0})

    const left = () => {
        const tileLeft = horizontal('left', tiles, setModal, win, setWin, score, setScore, setScoreDifference)
        saveTiles(setTiles, tileLeft)
    }
    const up = () => {
        const tileUp = horizontal('left', changeOrientation(tiles), setModal, win, setWin, score, setScore, setScoreDifference)
        saveTiles(setTiles, changeOrientation(tileUp))
    }
    const right = () => {
        const tileRight = horizontal('right', tiles, setModal, win, setWin, score, setScore, setScoreDifference)
        saveTiles(setTiles, tileRight)
    }
    const down = () => {
        const tileDown = horizontal('right', changeOrientation(tiles), setModal, win, setWin, score, setScore, setScoreDifference)
        saveTiles(setTiles, changeOrientation(tileDown))
    }


    const touchStart = (e )=>{
        const touch = e.changedTouches[0]
        setPosition({x: touch.pageX, y: touch.pageY})
    }
    const touchEnd = (e) => {
        const touch = e.changedTouches[0]
        const direction = checkMove(position.x, position.y, touch.pageX, touch.pageY)
        if (direction === 'left') left()
        if (direction === 'right') right()
        if (direction === 'up') up()
        if (direction === 'down') down()
    }
    document.onkeydown = function(e) {
        if(modal.type === 'win') {
            setModal({visible: false, type: ''})
        }
        switch (e.key) {   
            case 'ArrowLeft':
                e.preventDefault()
                left()         
                break
            case 'ArrowUp':
                e.preventDefault()
                up()
                break
            case 'ArrowRight': 
                e.preventDefault()
                right()
                break
            case 'ArrowDown':
                e.preventDefault()
                down()
                break
        }
    } 
    

    return (
        <div className="game">
        <MyModal modal={modal}>
            <GameMessage
            startGame={startGame}
            setModal={setModal}
            modal={modal}
            />
        </MyModal>
        <div 
        className="wrapper" 
        onTouchStart={touchStart} 
        onTouchEnd={touchEnd}>
            {tiles.map((n, index)=> 
            <Tile number={n} key={index}/>   
            )}
        </div>
        </div>
      
  )
}

export default Game