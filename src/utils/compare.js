export const compare = (a1, a2) => {
    return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
}