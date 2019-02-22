function commChars() {
    
    var CommLetters = [];

    for (i = 0; i <= firstWord.length; i++) {
        if (secondWord.indexOf(firstWord[i]) >= 0)
            CommLetters.push(firstWord[i]);
        console.log(CommLetters);
    }
 
}



