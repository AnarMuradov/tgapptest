import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp
function App() {

  useEffect(() => {
   tg.ready()
  }, [])
  function onClose() {
    tg.close()
  }
  
  return (
    <div className="App">
      <button className='close' onClick={onClose}>Close</button>
      
    </div>
  );
}

export default App;
