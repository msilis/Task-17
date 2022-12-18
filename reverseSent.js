
function reverseSent(sentence, position){
    position = 0;
    if (sentence === ''){
        return '';}
    else{
    return reverseSent(sentence.substr(1)) + sentence.charAt(position); }
}




