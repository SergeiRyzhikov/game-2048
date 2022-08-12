import React from 'react'
import { getColor } from '../../../utils/getColor'
import cl from './Tile.module.css'

function Tile({number}) {
  const [backgroundColor, color] = getColor(number)
  
  return (
    (number)
    ? <div className={cl.tile} style={{background: backgroundColor, color: color}}>{number}</div>
    : <div className={cl.tile} style={{background: 'rgba(238, 228, 218, 0.35)'}}></div>
  )
}

export default Tile
