function reverseSent(sentence, position){
    if (position == sentence.length){
        return;
    }
    reverseSent(sentence, position + 1);
    console.log(sentence[position])
}

