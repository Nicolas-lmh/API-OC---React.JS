import React from 'react';
import Main from '../src/Pages/Main';
import ReactDOM from 'react-dom';

function App() {
  return (
    <Main />
  );
}

export default App;

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);