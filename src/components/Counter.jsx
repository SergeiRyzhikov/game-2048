import React, { useState } from 'react'
import 'animate.css'
import { useScore } from '../hooks/useScore'
import { useGetStorage } from '../hooks/useGetStorage'

function Counter({score, scoreDifference, setScore}) {
    const [display, setDisplay] = useState('none')

    useGetStorage(setScore, score)

    useScore(setDisplay, score)

    return (
        <div className="counter">
            <div className="score">
                {scoreDifference !== 0 &&
                <div 
                className="animate" 
                style={{display: display, opacity: 1}} 
                onAnimationEnd={()=> setDisplay('none')}
                >+{scoreDifference}</div>    
                }
                <p className="scoreMessage">SCORE</p>
                <span className="score">{score}</span>
            </div>
            <div className="score">  
                <p className="scoreMessage">BEST</p>
                <span className="score">{localStorage.getItem('bestScore')}</span>
            </div>
        </div>
    )
}

export default Counter













    // const speech = () => {
        // const text = score.toString()
        // const utterance = new SpeechSynthesisUtterance(text)
        // speechSynthesis.speak(utterance)
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     console.log(position.coords.latitude, position.coords.longitude)
        // })
    //     localStorage.setItem('myCat', score)
        
    // }