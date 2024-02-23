import { useState } from 'react';
import Header from '../components/header/Header';
import FormJogo from '../components/forms/FormJogo';
// import ListaDeJogos from '../components/lists/ListaDeJogos';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [exibirFormulario, setExibirFormulario] = useState(true);

  const toggleFormulario = () => {
    setExibirFormulario(!exibirFormulario);
  };

  return (
    <div className='App'>
      <Header toggleFormulario={toggleFormulario} />
      <main>
        {exibirFormulario && <FormJogo />}
        {/* <ListaDeJogos /> */}
        <Outlet />
      </main>
    </div>
  );
}

export default App
