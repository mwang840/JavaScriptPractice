function digPow(n, p){
    var modulus = 0
    var curr = p
    let str = n.toString()
    for(let num in n){
        modulus += Math.pow(num, p)
        p++
    }
    if(modulus != n * p){
        return -1
    }
    return modulus / n
}