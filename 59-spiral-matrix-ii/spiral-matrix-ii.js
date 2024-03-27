/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const result = [];

    let counter = 1;
    let startCol = 0,
        endCol = n - 1,
        startRow = 0,
        endRow = n - 1;

    // insert empty arrays
    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    // repeat steps until start & end are same (no more col/row to insert)
    while (startCol <= endCol && startRow <= endRow) {
        //insert top row -> left to right (1-4)
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // insert right most col -> top to bottom (5-7)
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // insert bottom row -> right to left (8-10)
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // insert left most col -> bottom to top (11-12)
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return result;
};