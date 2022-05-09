export function digital_root(n){
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