export const checkMove = (x1, y1, x2, y2) => {
    const distance = ((x2-x1)**2+(y2-y1)**2)**0.5
    if(distance > 1){
        const x = Math.abs(x1-x2)
        const y = Math.abs(y1-y2)
        if(x > y) {
            if((x1-x2) >0) {
                return 'left'
            }
            else return 'right'
        }
        else {
            if((y1-y2) >0) {
                return 'up'
            }
            else return 'down'
        }
        
    }
}