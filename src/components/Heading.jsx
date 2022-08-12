import React, { useRef } from 'react'
import Counter from './Counter'

function Heading({...props}) {
    
    return (
        <div className="heading">
        <p className="name">2048</p> 
        <Counter {...props}/>
        </div>
    )
}

export default Heading