export function reverseWords(word){
    const splitBySpace = word.split(" ");
    let backWards = "";
    for(let i = 0; i < word.length(); ++i){
        if(word[i] != " "){
            backWards.join(splitBySpace);
        }
    }
    return backWards;
}