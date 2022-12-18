
function reverseSent(sentence, position){
    position = 0;
    if (sentence === ''){ //when the string is empty, stop the recursion
        return '';}
    else{
    return reverseSent(sentence.substring(1)) + sentence.charAt(position); } //for each iteration, the first part will return the sentence at index 1 and the second part will add the letter in position 0
}

console.log(reverseSent('Tree'))


