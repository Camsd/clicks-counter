import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickEvent = () =>{
    setNumClicks(numClicks + 1);
  }

  const restartCounter = () =>{
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='title-container'>
        <h1>Clicks counter</h1>
      </div>
      <div className='counter-container'>
        <Counter numClicks={numClicks} />
      </div>
        <div className='button-container'>
          <Button
          text='Click'
          isClickButton={true}
          clickEvent={clickEvent}
          />

          <Button
          text='Restart'
          isClickButton={false}
          clickEvent={restartCounter}
          />
      </div>
    </div>
  );
}

export default App;
