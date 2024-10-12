export const crossCheck = (currentSquares, currentPosition, colAxis, rowAxis, stoneColor) => {

const change = [];

if (
    currentPosition.colIndex + colAxis > 5 ||
    currentPosition.colIndex + colAxis < 0 ||
    currentPosition.rowIndex + rowAxis > 5 ||
    currentPosition.rowIndex + rowAxis < 0
) {
    return change;
}
}
