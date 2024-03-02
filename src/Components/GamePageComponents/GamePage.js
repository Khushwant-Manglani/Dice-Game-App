import { useState } from 'react';
import TopScoreBox from './TopScoreBox';
import BottomDiceRollBox from './BottomDiceRollBox';
import GameRules from './GameRules';

function GamePage() {
  const [totalScore, setTotalScore] = useState(0);
  const [diceVal, setDiceVal] = useState(0);
  const [diceImgSrc, setDiceImgSrc] = useState('images/dice/dice_1.png');
  const [selectDiceText, setSelectDiceText] = useState('');
  const [showGameRule, setShowGameRule] = useState(0);
  return (
    <div className="game-page">
      <p className="not-selected">{selectDiceText}</p>
      <div className="game-page-content">
        <TopScoreBox totalScore={totalScore} diceVal={diceVal} setDiceVal={setDiceVal} />
        <BottomDiceRollBox totalScore={totalScore} setTotalScore={setTotalScore} diceVal={diceVal} setDiceVal={setDiceVal} diceImgSrc={diceImgSrc} setDiceImgSrc={setDiceImgSrc} selectDiceText={selectDiceText} setSelectDiceText={setSelectDiceText} showGameRule={showGameRule} setShowGameRule={setShowGameRule} /> 
        {showGameRule ? <GameRules /> : ""};
      </div>
    </div>
  );
} 

export default GamePage;