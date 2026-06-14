let word = 'Jaskirat Singh Rangi';

function vowelConsonantCount(word) {
    let vowels_count = 0;
    let consonants_count = 0;

    all_words = word.toLowerCase().split('');
    all_chars = all_words.filter(char => char !== ' ');
    for (let i = 0; i < all_chars.length; i++) {
        if (all_chars[i] === 'a' || all_chars[i] === 'e' || all_chars[i] === 'i' || all_chars[i] === 'o' || all_chars[i] === 'u') {
            vowels_count += 1;
        }
        else {
            consonants_count += 1;
        }
    }
    return { vowels: vowels_count, consonants: consonants_count };

}

console.log(vowelConsonantCount(word));

