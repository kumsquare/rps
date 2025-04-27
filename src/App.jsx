import { useState } from 'react';
import './App.css';

function App() {
  const choices = ['Rock', 'Paper', 'Scissor'];
  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("");
  const [result, setResult] = useState("");
  const [chances, setChances] = useState(0);

  const playGame = (playerChoice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    setPlayer(playerChoice);
    setComputer(compChoice);

    if (playerChoice === compChoice) setResult("It's a draw!");
    else if (
      (playerChoice === "Rock" && compChoice === "Scissor") ||
      (playerChoice === "Paper" && compChoice === "Rock") ||
      (playerChoice === "Scissor" && compChoice === "Paper")
    )
      setResult("You Win!");
    else
      setResult("You Lose!");

    setChances(chances + 1);
  };

  return (
    <div className="page-container">
      <div className="game-container">
        <h2>Rock Paper Scissors</h2>
        {chances < 3 ? (
          <div className="button-group">
            {choices.map((choice) => (
              <button key={choice} onClick={() => playGame(choice)}>{choice}</button>
            ))}
          </div>
        ) : (
          <p className="no-chances">No more Chances</p>
        )}
        <div className="status">
          <p><strong>You:</strong> {player} | <strong>Computer:</strong> {computer}</p>
          <p className="result">{result}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
