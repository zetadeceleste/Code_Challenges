/*

Disk Space Analysis

A company is performing an analysis on the computers at its main office. 
The computers are spaced along a single row. 
For each group of contiguous computers of a certain length, that is, for each segment, determine the minimum amount of disk space available on a computer. 
Return the maximum of these values as your answer. 
Example n = 4 the number of computers space i = [8, 2, 4, 6]; x = 2 the segment length.
The free disk space of computers in each of the segments is [8, 2] [2, 4] [4, 6]. 
The minimum of the three segments are [2, 2, 4].
The maximum of these is 4 Function Description Complete the function segment in the editor below. 
Segment has the following parameterisk int x: the segment length to analyze int space(n): the available hard disk space on each of the computers.

*/

const diskSpaceAnalysis = (n, spaces) => {
  if (Number.isInteger(n) && spaces.length) {
    let auxArray = [];
    let auxMax = n;
    let minimumArray = [];
    const minFromArray = (arr) => Math.min(...arr);
    const maxFromArray = (arr) => Math.max(...arr);

    for (let index = 0; index <= spaces.length; index++) {
        if (index < auxMax) {
            auxArray.push(spaces[index]);
        } else {
            minimumArray.push(minFromArray(auxArray));
            index = index - n;
            auxMax++;
            auxArray = [];
        }
    }

    return maxFromArray(minimumArray);
  } else {
    return "None";
  }
};

module.exports = diskSpaceAnalysis;
