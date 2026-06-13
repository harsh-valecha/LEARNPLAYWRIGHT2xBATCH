// String Reverse | Palindrome program -- without using reverse method

function isPalindrome(str) {
    let reverse = "";

    for (let i = -1; i >= -str.length; i--) {
        reverse += str.at(i).toLowerCase();
    }

    if (reverse === str.toLowerCase()) {
        console.log(`${str} is palindrome`);
    }
    else {
        console.log(`${str} is not palindrome`);
    }
}
isPalindrome("Madam");

// Anagrams 

function isAnagram(word1, word2) {
    let sorted1 = word1.toLowerCase().split('').sort().join('');
    let sorted2 = word2.toLowerCase().split('').sort().join('');


    if (sorted1 === sorted2) {
        console.log(`${word1} and ${word2} are anagrams`);
    }
    else {
        console.log(`${word1} and ${word2} are not anagrams`);
    }
}

isAnagram('Eat', 'Tea');
isAnagram("Nail", "Lain")