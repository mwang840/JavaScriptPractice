function reverseWords(str){
    var splitted = str.split(" ")
    var reversed = []
    for(let i = splitted.length; i >=0; i--){
        reversed.push(splitted[i])
    }
    return reversed.join("")
}