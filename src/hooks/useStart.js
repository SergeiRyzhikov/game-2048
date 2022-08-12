import { useEffect } from "react"

export const useStart = (startGame, setTiles) => {
    useEffect(()=>{
    
        if(localStorage.getItem('tiles')) {
          const tilesStr = localStorage.getItem('tiles')
          let savedTiles = tilesStr.split(',')
          setTiles(savedTiles.map(n=> Number(n)))
        }
        else {
          startGame()
        }
        
      }, [])
}