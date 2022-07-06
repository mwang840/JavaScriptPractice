
function main(){
    console.log("Hello World");
    console.log(digital_root(140))
    console.log(reverseWords("EDP445"))
}

main()


function digital_root(n){
    //Chacks for single digit which is base case
    if(n == 0){
        return 0;
    }
    //Makes a recursive call
    else{
        return digital_root(n % 10);
        n = n/10;
    }
}

function reverseWords(str){
    return str.split(' ').map(function(word){
        return word.split('').reverse().join('');
      }).join(' ');
}