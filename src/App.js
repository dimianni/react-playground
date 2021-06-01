import React, { Component } from 'react';
import './App.css';

import { Button, Hello, Input } from './Components'

class App extends Component {

  state = {
    username: '',
    buttonPosition: 'ON'
  }

  onButtonClick = () => {
    this.setState(prevState => ({
      buttonPosition: prevState.buttonPosition === 'ON' ? 'OFF' : 'ON'
    }))
  }

  onInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }


  render() {

    const { username, buttonPosition } = this.state;

    let hello;

    if (username !== '') {
      hello = <Hello name={username} />
    }

    return (
      <main>
        <Button onClickFunction={this.onButtonClick} val={buttonPosition} />
        <Input onInputFunction={this.onInput} />
        {hello}
      </main>
    )
  }

}

export default App;
