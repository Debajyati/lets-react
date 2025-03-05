import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WINNING-COMBINATIONS";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const PLAYERS = {
  'X': 'Player 1',
  'O': 'Player 2'
};

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveGameboard(gameTurns) {
  let gameBoard = structuredClone(initialGameBoard);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;

  }
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameboard(gameTurns);
  
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function deriveWinner(gameBoard, players) {
    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
      const [firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol] = combination.map(({row,column}) => (gameBoard[row-1][column-1]));

      if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
        winner = players[firstSquareSymbol];
      }
    }

    return winner;
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      }
    })
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...structuredClone(prevTurns)
      ];

      return updatedTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol={"X"} isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}></Player>
          <Player initialName={PLAYERS.O} symbol={"O"} isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}></Player>
        </ol>
        {(winner || hasDraw) && <GameOver onRematch={handleRematch} winner={winner} />}
        <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
