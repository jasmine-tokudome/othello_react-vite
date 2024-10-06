function checkStone(yIndex, xIndex, player, board = this.board) {

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
  const result = crossCheck(board,  { yIndex, xIndex }, el[0], el[1], player);
  change.push(...result);
  });
  return change;
  }

  const crossCheck = (board, currentPosition, yAxis, xAxis, player) => {
    const change = [];
    
    // 石を置いた箇所からチェックを進めていく時にboardの端までチェックし終えたらチェックする処理を終了する
    if (
    currentPosition.yIndex + yAxis > 5 ||
    currentPosition.yIndex + yAxis < 0 ||
    currentPosition.xIndex + xAxis > 5 ||
    currentPosition.xIndex + xAxis < 0
    ) {
    return change;
    }