import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }
  }

  handleChange(val) {
    this.setState({message:val})
  }

  render() {
    return (
      <div className='App'>
        <input onChange={(e) => this.handleChange(e.target.value)} type='text'/>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default App;
