import React from 'react';
import styles from './board.css';
import Card from './card.jsx'

const Board = ({data, addBoard, board, addCard}) => {
	let addBoardButton = data[0] !== '+ Add another board'
	const addBoardButtonView = 
	  addBoardButton ? 
	  <h3 className={styles.header}>{data[0]}</h3> :
	  <h3 onClick={addBoard} className={styles.header}>{data[0]}</h3>;
  return (
    <div className={styles.board}> 
      {addBoardButtonView}
      {data.map((card, i) => {
      	if (i === 0) return;
      	return <Card board={board} card={i} data={card}/>
      })}
      {addBoardButton && <Card addCard={addCard} board={board} data={'+ Add another card'}/>}
    </div>
  );
}

export default Board;