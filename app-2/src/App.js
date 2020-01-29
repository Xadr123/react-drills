import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foods: ['Hamburger', 'Grilled Cheese', 'Fish', 'Steak', 'Chicken']
    }
  }

  render() {
    let foodsToDisplay = this.state.foods.map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })

    return (
      <div className='App'>
        {foodsToDisplay}
      </div>
    )
  }
}

export default App;
