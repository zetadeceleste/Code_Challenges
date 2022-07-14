/*

Winning Card

In a card game, each player will be given a set of random cards. Players will throw on the table their one winning card, the player with the highest card wins.
A winning card is the card that only exists once in the set of cards, and the highest one.
Given an array of sets of integers cards, return the card of the winning player. Return -1 If no such card is found.

Example 1:
Input: cards = [[5,7,3,9,4,9,8,3,1], [1,2,2,4,4,1], [1,2,3]]
Output: 8

Example 2:
Input: cards = [[5,5], [2,2]]
Output: -1

*/

const getUnique = (arr) => {
  let uniqueArr = [];
  let auxArr = [];

  auxArr = arr.filter((item, index) => {
    if (arr.indexOf(item) !== index) {
      return item;
    }
  });

  if (auxArr.length) {
    uniqueArr = arr.filter((item) => !auxArr.includes(item) && item);
  }

  return uniqueArr;
};

const getMax = (arr) => Math.max(...arr);

const winningCard = (cards) => {
  let winningCardSet = 0;
  let uniqueSet = [];
  let winningCardArray = [];

  if (cards[0]?.length) {
    cards.map((set) => {
      uniqueSet = getUnique(set);
      if (uniqueSet.length) {
        winningCardSet = getMax(uniqueSet);
        winningCardArray.push(winningCardSet);
      }
    });

    if (winningCardArray.length) {
      return getMax(winningCardArray);
    } else {
      return -1;
    }
  }

  return "Invalid array";
};

module.exports = winningCard;
