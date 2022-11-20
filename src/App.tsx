import React from 'react';
import Form from './components/Form';
import List from './components/List';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <div 
        className='flex items-start gap-10 content-center justify-center'
      >
      <div 
        className='flex flex-col items-center gap-4 content-center justify-center'>
        <Form />
        <Stopwatch />
      </div>
        <List />
      </div>
    </div>
  );
}

export default App;
