import { WINNER_COMBOS } from "../src/constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  // check all the mix to see if X or O won
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // if there is no winner
  return null;
};

export const checkEndGame = (newBoard) => {
  // check if there is a tie
  return newBoard.every((square) => square !== null);
};
