import '../App.css';

function Piece(props) {
  return (
      <div className='piece'>
        <h3>{props.title}</h3>
        <img src={props.src} alt={props.alt}></img>
      </div>
  );
}

export default Piece;