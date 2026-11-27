// Example 1: Length of the last word
function lengthOfLastWord(s) {
    let words = s.split(" ");              // 1. Split into words
    let lastWord = words[words.length - 1]; // 2. Find the last word
    return lastWord.length;                 // 3. Length of the word
}

console.log(lengthOfLastWord("Hello World"));   // 5

// Example 2: Length of the last word (with extra spaces)
function lengthOfLastWordTrim(s) {
    let trimmed = s.trim();                    // 1. Trim the string
    let words = trimmed.split(" ");            // 2. Split into words
    let lastWord = words[words.length - 1];    // 3. Identify the last word
    let length = lastWord.length;              // 4. Calculate its length
    return length;                             // 5. Return the length
}

console.log(lengthOfLastWordTrim("   fly me   to   the moon  "));   // 4

// Example 3: Check if two strings are anagrams
function isAnagram(str1, str2) {
    // 1. Remove spaces and convert to lowercase
    let a = str1.replace(/ /g, "").toLowerCase();
    let b = str2.replace(/ /g, "").toLowerCase();

    // 2. Sort the characters
    let sortedA = a.split("").sort().join("");
    let sortedB = b.split("").sort().join("");

    // 3. Compare and 4. Return the result
    return sortedA === sortedB;
}

console.log(isAnagram("listen", "silent"));   // true
console.log(isAnagram("hello", "world"));     // false
