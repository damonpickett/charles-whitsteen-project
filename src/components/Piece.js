import '../App.css';

function Piece(props) {
  return (
      <div className='piece'>
        <img src={props.src} alt={props.alt}></img>
      </div>
  );
}

export default Piece;