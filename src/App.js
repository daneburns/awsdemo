import logo from './logo.svg';
import './App.css';
import {jsx, css} from '@emotion/react'
const style = css`
  color: hotpink;
`
const cyberPunk = css`
  background-color: hotpink;
`

function App() {
  return (
    <div className="App" css={style}>
      <header className="App-header" css={cyberPunk}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
g