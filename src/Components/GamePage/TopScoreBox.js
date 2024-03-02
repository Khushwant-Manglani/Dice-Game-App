import TotalScore from "./TotalScore";
import DiceNumbers from "./DiceNumbers";

function TopScoreBox(props) {
  return (
    <div className="top-score-box">
      <TotalScore totalScore={props.totalScore} />
      <DiceNumbers diceVal={props.diceVal} setDiceVal={props.setDiceVal} />
    </div>
  )
} 

export default TopScoreBox;