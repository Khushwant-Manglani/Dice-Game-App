import { useState } from "react";
import HomePage from "./Components/HomePage/HomePage";
import GamePage from "./Components/GamePage/GamePage";
import './App.css';

function App() {
  const [showGamePage, setShowGamePage] = useState(0);
  return (
    <div className="App">       
        {showGamePage ? <GamePage /> : <HomePage setShowGamePage={setShowGamePage} /> }
    </div>
  );
}

export default App;
