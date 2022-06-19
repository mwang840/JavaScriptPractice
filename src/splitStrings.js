function solution(str){
    var toArr = str.split('')
    var holder = []
    for(let i = 0; i < str.length(); i += 2){
        if(toArr[i+1]){
            holder.push(toArr[i] + toArr[i+1])
           
        }
        else{
            holder.push(toArr[i] + '_')
        }
    }
    return holder
}