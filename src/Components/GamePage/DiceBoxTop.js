function changeDice(props, i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(props.setDiceImgSrc(`images/dice/dice_${i}.png`));
    }, 100);
  })
}

async function GenerateRandomDiceAndCalcScore(props) {
  let visitedDiceVal=Array(6).fill(0);
  visitedDiceVal[props.diceVal]=1;

  for(let i=1 ; i<=6 ; ++i) {
    if(visitedDiceVal[i]) continue;
    console.log(i);
    await changeDice(props, i);
    visitedDiceVal[i]=1;
  }
  let randomDiceVal=Math.floor(Math.random()*6+1);
  (randomDiceVal === props.diceVal) ? props.setTotalScore(props.totalScore+1) : props.setTotalScore(props.totalScore-1);
  props.setDiceImgSrc(`images/dice/dice_${randomDiceVal}.png`);
}

function NotSelectedNoYet(props) {
  props.setSelectDiceText("You have not selected any number yet")
}

function DiceBoxTop(props) {
  return (
    <div className="dice-box-top">
      <div className="dice-box-image">
        <button className="dice-box-image-btn" onClick={() => {
          !(props.diceVal === 0) ? GenerateRandomDiceAndCalcScore(props) : NotSelectedNoYet(props);
        }}><img src={props.diceImgSrc} alt="Dice image" className="dice-image" /></button>
      </div>
      <div className="dice-roll-text">Click on Dice to roll</div>
    </div>
  );
}

export default DiceBoxTop;  