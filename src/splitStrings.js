function solution(str){
    holder = []
    for(var i = 0; i < str.length(); ++i){
        if(i % 2 == 0){
            holder += str.split(/[,]+/)
            holder+=str[i]
        }
        else{
            holder+= str[i]
        }
    }
    if(str.length() % 2 == 1){
        holder.push('_')
    }
    return holder
}