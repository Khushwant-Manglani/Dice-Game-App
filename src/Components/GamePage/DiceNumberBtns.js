function DiceNumberBtns(props) {
  return (
    <div className="dice-number-btns">
      <button onClick={() => {
        props.setDiceVal(1);
      }} className="dice-btn">1</button>  
      
      <button onClick={() => {
        props.setDiceVal(2);
      }} className="dice-btn">2</button>
      
      <button onClick={() => {
        props.setDiceVal(3);
      }} className="dice-btn">3</button> 
      
      <button onClick={() => {
        props.setDiceVal(4);
      }} className="dice-btn">4</button> 
      
      <button onClick={() => {
        props.setDiceVal(5);
      }} className="dice-btn">5</button> 

      <button onClick={() => {
        props.setDiceVal(6);
      }} className="dice-btn">6</button> 
    </div>
  )
}

export default DiceNumberBtns;