import React, { useEffect } from 'react'
import MyButton from './UI/myButton/MyButton'
import { CSSTransition } from 'react-transition-group';
function GameMessage({startGame, setModal, modal}) {
  useEffect(()=>{
    if(modal.type==='lose') {
      console.log('lose')
      localStorage.setItem('tiles', '')
      localStorage.setItem('score', '0')
    }
  }, [modal])
  return (
    <CSSTransition in={modal.visible} timeout={3000} classNames="message"> 
    <div>
        {modal.type==='lose' &&
        <div>
          <p className="game__message">You lose!</p>
          <div style={{display: 'flex', justifyContent: 'center'}} onClick={()=>setModal({visible: false, type: ''})}>
          <MyButton onClick={startGame}>New game</MyButton>
          </div>
        </div>
        } 
        {modal.type==='win' &&
        <div>
          <p className="game__message">You win!</p>
          <div style={{display: 'flex', justifyContent: 'center'}} onClick={()=>setModal({visible: false, type: ''})}>
          <MyButton>Keep playing</MyButton>
          </div>
        
        </div>
        }
    </div>
    </CSSTransition>
  )
}

export default GameMessage