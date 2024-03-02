import LeftPart from './LeftPart';
import RightPart from './RightPart';

function HomePage(props) {
  return (
    <div className="main-content" > 
      <LeftPart />
      <RightPart setShowGamePage={props.setShowGamePage} />
    </div>
  )
}

export default HomePage;
