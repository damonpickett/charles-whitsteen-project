import '../App.css';

function Piece(props) {

  const handleDecrement = () => {
    if (props.mintAmount <= 1) return;
    props.setMintAmount(props.mintAmount - 1);
  };

  const handleIncrement = () => {
    if (props.mintAmount >= 3) return;
    props.setMintAmount(props.mintAmount + 1);
  };

  return (
      <div className='piece'>
        <div className='image'>
          <h3>{props.title}</h3>
          <img src={props.src} alt={props.alt}></img>
        </div>
        <div className='increments'>
          <button
            className='incdec'
            onClick={handleDecrement}
          >-</button>
          <input
            type='number'
            value={props.mintAmount}
          ></input>
          <button
            className='incdec'
            onClick={handleIncrement}
          >+</button>
        </div>
        <div className='mint-button'>
            <button 
              onClick={props.onClick}
            >Mint</button>
          </div>
      </div>
  );
}

export default Piece;