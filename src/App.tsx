import React from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div className="App flex flex-col items-center gap-10 content-center justify-center">
      <Form />
      <List />
    </div>
  );
}

export default App;
