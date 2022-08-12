import React from 'react'
import cl from './MyModal.module.css'

const MyModal = function ({children, modal}) {
    const rootClasses = [cl.myModal]
    if (modal.visible) {
        rootClasses.push(cl.active)
    }
    return (
        
        <div className={rootClasses.join(' ')}>
            <div className={cl.myModalContent} >
                {children}
            </div>
        </div>
    )
}

export default MyModal