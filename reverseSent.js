let sentenceArray = []

function reverseSent(sentence, position){
//Base case
    if (position == sentence.length){
        return;
    }
//Recursive code
    reverseSent(sentence, position + 1);
    sentenceArray.push(sentence[position]);

}
reverseSent('Tree', 0)
console.log(sentenceArray.join(''))