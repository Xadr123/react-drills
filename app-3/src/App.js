import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterString: '',
      foods: ['Apple', 'Cucumber', 'Pickle', 'Orange', 'Lemon']
    }
  }

  handleChange(filter) {
    this.setState({filterString:filter})
  }

  render() {
    let foodsToDisplay = this.state.foods.filter((e, i) => {
      return e.includes(this.state.filterString)
    }).map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })

    return (
      <div className='App'>
        <input onChange={(e) => this.handleChange(e.target.value)} type='text'/>
        {foodsToDisplay}
      </div>
    )
  }
}

export default App;
