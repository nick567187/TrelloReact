import React from 'react';
import Board from './board.jsx';
import Nav from './nav.jsx';
import styles from './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [['To do' , 'yes', 'no'], ['no','card'], ['yes','this']]
		}
		this.addBoard = this.addBoard.bind(this);
		this.addCard = this.addCard.bind(this);
	}

  addBoard() {
  	var boardName = window.prompt('What do you want to name your board?');
  	this.setState((prevState) => {
      let newData = prevState.data.slice();
      newData.push([boardName])
      return {
        data: newData  
      }
  	});
  }

  addCard(board) {
  	var cardContent = window.prompt('What do you want to name your board?');
    this.setState((prevState) => {
      let newData = prevState.data.slice();
      newData[board].push(cardContent)
      return {
        data: newData  
      }
  	});     
  }

  moveCard(startBoard, startIndex, targetBoard, targetIndex) {

  }

	render() {
	  return (
	    <div className={styles.app}> 
	      <Nav />
	      <div>Trello Board</div>
		    <div className={styles.container}>
		      {this.state.data.map((board, i) => {
		      	return <Board addCard={this.addCard} data={board} board={i}/>
		      })}
			    <Board addBoard={this.addBoard} data={['+ Add another board']}/>    
		    </div>
	    </div>
	  );		
	}
}

export default App;