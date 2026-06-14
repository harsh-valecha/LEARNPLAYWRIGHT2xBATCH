// check if a string has duplicate characters and only return unique ones

function getUniqueLetters(words) {
    // first split the string
    let text = words.toLowerCase().split('');

    let uniqueLetters = [];

    for (let char of text) {
        if (char !== ' ' && !uniqueLetters.includes(char)) {
            uniqueLetters.push(char);
        }
    }
    return uniqueLetters;
}

console.log(getUniqueLetters("Jai Hind Vande Mataram bharat Mata ki Jai"));