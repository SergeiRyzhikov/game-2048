import { useEffect } from "react"

export const useScore = (setDisplay, score) => {
    useEffect(() => {
        setDisplay('none')
        setDisplay('block')
        localStorage.setItem('score', score)
        if(score > localStorage.getItem('bestScore')){
            localStorage.setItem('bestScore', score)
        }
    }, [score])
}