/* 

Window of Words

Extract a center word and a fixed-sized "window" of words around the word. Write a method signature that given an array of strings and an integer C (number of words to be taken on each side of the center word) extracts all the posible center words with their corresponding surrounding words.
A center word is only valid if it has a C number of words surrounding it If C is 2 then the total window size is 5 (2 previous words + 1 center word + 2 next words). *

Example:

Input:
If C: 2 and words: ['I', 'am', 'solving', 'an', 'interesting', 'NLP', 'problem']

Output:

[
    [['I', 'am', 'an', 'interesting'], 'solving'],
    [['am', 'solving', 'interesting', 'NLP'], 'an'],
    [['solving', 'an', 'NLP', 'problem'], 'interesting']  
]

*/

const windowOfWords = (words, c) => {
  if (words?.length && c > 0 && c < words?.length) {
    let rowGrouped = [];
    let row = [];
    let middleWord = "";

    let from = 0;
    let to = c * 2 + 1;

    while (to <= words?.length) {
      for (let i = from; i < to; i++) {
        if (i === from + c) {
          middleWord = words[i];
        } else {
          row.push(words[i]);
        }
      }

      rowGrouped.push([row, middleWord]);

      if (to === words?.length) {
        return rowGrouped.length > 1 ? rowGrouped : [...rowGrouped.flat()];
      } else {
        row = [];
        middleWord = "";
        from++;
        to++;
      }
    }
  }

  return "Invalid input";
};

module.exports = windowOfWords;
