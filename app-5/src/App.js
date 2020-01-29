import React, { Component } from 'react';
import './App.css';
import Image from "./Components/Image"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Image url={'https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png'}/>
      </div>
    )
  }
}

export default App;