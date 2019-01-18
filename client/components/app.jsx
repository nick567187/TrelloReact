import React from 'react';
import Board from './board.jsx';
import Nav from './nav.jsx';
import styles from './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [['To do' , 'yes', 'no'], ['no','card'], ['yes','this']],
			drag: null
		}
		this.addBoard = this.addBoard.bind(this);
		this.addCard = this.addCard.bind(this);
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
	}

  addBoard() {
  	var boardName = window.prompt('What do you want to name your board?');
  	this.setState((prevState) => {
      let newData = prevState.data.slice();
      newData.push([boardName]);
      return {
        data: newData  
      }
  	});
  }

  addCard(board) {
  	var cardContent = window.prompt('What do you want to name your board?');
    this.setState((prevState) => {
      let newData = prevState.data.slice();
      newData[board].push(cardContent);
      return {
        data: newData  
      }
  	});     
  }

  mouseDown(board, card) {
    this.setState({
      drag: [board, card]
    }); 
  }

  mouseUp(toBoard) {
  	if (this.state.drag) {
      this.setState((prevState) => {
	      let newData = prevState.data.slice();
	      let fromBoard = prevState.drag[0];
	      let fromCard = prevState.drag[1];
	      let toCard = newData[fromBoard].splice(fromCard, 1);
	      
	      newData[toBoard].push(toCard);
	      return {
	        data: newData,
	        drag: null
	      };
      }); 
  	}
  }

	render() {
	  return (
	    <div className={styles.app}> 
	      <Nav />
	      <div>Trello Board</div>
		    <div className={styles.container}>
		      {this.state.data.map((board, i) => {
		      	return <Board addCard={this.addCard} mouseUp={this.mouseUp} mouseDown={this.mouseDown} data={board} board={i}/>
		      })}
			    <Board mouseUp={this.mouseUp} addBoard={this.addBoard} data={['+ Add another board']}/>    
		    </div>
	    </div>
	  );		
	}
}

export default App;