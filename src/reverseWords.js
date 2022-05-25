export function reverseWords(word){
    return word.split(" ").reverse().join("").split("").reverse().join(" ");
}