import React from 'react';
import styles from './card.css';

const Card = ({data, addCard, board, card, mouseDown}) => {
	const addCardButton = 
	  data !== '+ Add another card' ? 
	  <span onMouseDown={() => mouseDown(board, card)} className={styles.card}> {data} </span> :
	  <span onClick={() => addCard(board)} className={styles.addCard}> {data} </span>;
  return (
    <div>
      {addCardButton}
    </div>
  );
}

export default Card;