function checkStone(rowIndex, colIndex, stoneColor, currentSquares = squares) {

  //チェックする方向
  const directions = [
  [0, 1], // 右
  [0, -1], // 左
  [-1, 0], // 上
  [1, 0], // 下
  [-1, -1], // 左上
  [1, 1], // 左下
  [-1, 1], // 右上
  [1, -1], // 右下
  ];
  
  const change = [];
  directions.forEach((el) => {
  const result = crossCheck(currentSquares,  { rowIndex, colIndex }, el[0], el[1], stoneColor);
  change.push(...result);
  });
  return change;
  }

export default crossCheck
