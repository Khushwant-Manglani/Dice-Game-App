function Heading() {
  return (
    <h1 className="game-heading" >
      DICE GAME
    </h1>
  )
}

function Button(props) {
  return (
    <div className="play-btn" >
      <button type="submit" className="btn" onClick={() => {
        props.setShowGamePage(1);
      }} >Play Now</button>
    </div>
  )
}

function RightPart(props) {
  return (
    <div className="right-content" >
      <Heading />
      <Button setShowGamePage={props.setShowGamePage} />
    </div>
  )
}

export default RightPart;