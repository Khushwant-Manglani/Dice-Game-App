function TotalScore(props) {
  return (
    <div className="total-score">
      <h1 className="total-score-number" >{props.totalScore}</h1>
      <p className="total-score-text" >Total Score</p>
    </div>
  );
}

export default TotalScore;