import GameRules from "./GameRules";

function DiceBoxBottom(props) {
  return (
    <div className="dice-box-bottom">
      <div className="reset-score">
        <button className="reset-score-btn dice-box-btn" onClick={() => {
          props.setTotalScore(0);
        }} >Reset Score</button>
      </div>
      <div className="show-rules">
        <button className="show-rules-btn dice-box-btn" onClick={() => {
          props.setShowGameRule(1);
        }}>Show Rules</button>
      </div>
    </div>
  )
}

export default DiceBoxBottom;