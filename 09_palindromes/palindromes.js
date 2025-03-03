const palindromes = function (word) {
    let formattedWord = word.split("")

    for (let i = 0; i < formattedWord.length; i++) {
        formattedWord[i] = formattedWord[i].toLowerCase();
        if (formattedWord[i] === "." ||
            formattedWord[i] === "," ||
            formattedWord[i] === "!" ||
            formattedWord[i] === "?" ||
            formattedWord[i] === " "
        ) {
            formattedWord.splice(i, 1);
            i--;
        }
    }

    let reverse = formattedWord.slice();
    reverse = reverse.reverse().join("");
    console.log(reverse);

    formattedWord = formattedWord.join("");
    
    console.log(formattedWord);
    console.log(reverse);
    return reverse === formattedWord;
}

// Do not edit below this line
module.exports = palindromes;
