/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  const new_str1 = str1.toLowerCase().split('');
  const new_str2 = str2.toLowerCase().split('');

  
  new_str1.sort();
  new_str2.sort();

  
  const sorted_str1 = new_str1.join('');
  const sorted_str2 = new_str2.join('');

if(sorted_str1 === sorted_str2){
  return true
} 
else{
  return false
} 

}


module.exports = isAnagram;
