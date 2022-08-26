function rectToSquare(lng, wdth){
    //Get area
    //Check if length is equal to width
    if(lng === wdth){
        return null;
    }
    else{
        let squareVal = []
        while(lng != wdth){
            if(lng > wdth){
                lng -= wdth
                squareVal.push(wdth);
            }
            else if (wdth > lng){
                wdth -= lng
                squareVal.push(lng);
            }
            squareVal.push(wdth)
        }
    }
    return squareVal
    
    //break the area down into different multiples of the area

    //create an array and place the multiples in the array
    //Sort the array by greatest number to least
}

function getMultiples(){

}