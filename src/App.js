import { useState } from "react";
import HomePage from "./Components/HomePageComponents/HomePage";
import GamePage from "./Components/GamePageComponents/GamePage";
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
