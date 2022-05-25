export function reverseWords(word){
    let reversed = []
    input = word.match(/S\+/g)
    var answer = ""
    for(let i = 0; i < word.length; ++i){
        answer += reversed(word[i]).split(' ').reverse().join(' ') + " "
    }
    return answer
}