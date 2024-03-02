import DiceNumberBtns from './DiceNumberBtns';

function DiceNumbers(props) {
  return (
    <div className="dice-number-box" >
      <DiceNumberBtns diceVal={props.diceVal} setDiceVal={props.setDiceVal} /> 
      <div className="select-number" >Select Number</div>
    </div>
  );
}

export default DiceNumbers;