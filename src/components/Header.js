import '../App.css';

const Header = (props) => {
  const { pointScore, highpointScore } = props;
  return (
    <div>
      <div className="headerArea">
        <h1>Memory Game!</h1>
        <div>
          <div>point = {pointScore}</div>
          <div>high score = {highpointScore}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
