import React from 'react'
import cl from './Bottom.module.css'

function Bottom() {
  return (
    <footer className={cl.footer}>
        <p>Game creater - Gabriele Cirulli</p>
        <div className={cl.line}></div>
        <p>Website made by Ryzhikov Sergei</p>
    </footer>
  )
}

export default Bottom