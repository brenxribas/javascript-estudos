import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    nome: 'Breno Ribas',
    counter: 0
  };

  handlePClick = () => {
    this.setState({ nome: 'Moura' });
  }

  handAClick = (event) => {
    event.preventDefault();

    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { nome, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {nome} {counter}
          </p>
          <a
            onClick={this.handAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
      </div>
    );
  }
}

export default App;
