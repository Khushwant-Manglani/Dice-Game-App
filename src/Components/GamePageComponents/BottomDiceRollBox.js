import DiceBoxTop from "./DiceBoxTop";
import DiceBoxBottom from "./DiceBoxBottom";

function BottomDiceRollBox(props) {
  return (
    <div className="dice-roll-box">
      <DiceBoxTop totalScore={props.totalScore} setTotalScore={props.setTotalScore} diceVal={props.diceVal} setDiceVal={props.setDiceVal} diceImgSrc={props.diceImgSrc} setDiceImgSrc={props.setDiceImgSrc} selectDiceText={props.selectDiceText} setSelectDiceText={props.setSelectDiceText} />
      
      <DiceBoxBottom totalScore={props.totalScore} setTotalScore={props.setTotalScore} diceVal={props.diceVal} setDiceVal={props.setDiceVal} diceImgSrc={props.diceImgSrc} setDiceImgSrc={props.setDiceImgSrc} showGameRule={props.showGameRule} setShowGameRule={props.setShowGameRule} />
    </div>
  )
} 

export default BottomDiceRollBox;