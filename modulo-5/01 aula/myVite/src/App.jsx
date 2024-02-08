import './App.css'
import { useState } from 'react'
import ColorSwitch from './components/colorSwitch';

function App() {
  const [clicks, setClicks] = useState(0);

  function handleClickOutside(event) {
    // event.target.tagName -> pega o nome da tag
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }
  return (
    <div style={{ width: '100vw', height: '100vh' }} onClick={handleClickOutside}>
      <h1>Contador de Cliques: {clicks}</h1>
      <ColorSwitch onChangeColor={handleChangeColor} />
    </div>
  );
}

export default App
