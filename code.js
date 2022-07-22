const perf = require('execution-time')();

//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const findSumPair = (array) => {
   for (let num of array) {
    for (j =1; j< array.length; j++) {
        if (num + array [j] === 0) {
            return true
        } else {
            return false
        }
    }
   }
}

const answer = findSumPair([1,-1,0,9,19])
console.log(answer)
//  Runtime 55.7 μs  Space Complexity  O(1)






// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueCharacters = (str) => {
    let uniq = ""
    for(let i = 0; i< str.length; i++) {
        if (uniq.includes(str[i]) === false){
        return false }
        else {
            return true  
        }
    } 
}
console.log(hasUniqueCharacters('damien likes hot dogs'))
// Runtime 57.4 μs    Space Complexity   O(1)




// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.
const isPangram  = (string) => {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  console.log(isPangram('Jack is nimble and quick'))
//Runtime 63 μs  Space Complexity O(1)


// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = (str) => {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
}

console.log(findLongestWord('Nate, Amber, Brosky, Herald, Etcetera'))
// Runtime 60-70 μs Space Complexity O(1)



perf.start();                     // Starts timer
findLongestWord('Nate, Amber, Brosky, Herald, Etcetera')
let timeResults = perf.stop(); 

console.log("time-results", timeResults.preciseWords);
