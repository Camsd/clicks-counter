import './App.css';
import Button from './components/Button';

function App() {

  const clickEvent = () =>{
    console.log('Click');
  }

  const restartCounter = () =>{
    console.log('restart');
  }

  return (
    <div className="App">
      <div className='title-container'>
        <h1>Clicks counter</h1>
      </div>
      <div className='main-container'>
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
