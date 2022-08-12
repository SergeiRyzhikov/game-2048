import { useEffect } from "react"

export const useGetStorage = (setScore, score) => {
    useEffect(() => {
        setScore(Number(localStorage.getItem('score')))
        if(!localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', score)           
        }
    }, [])
}