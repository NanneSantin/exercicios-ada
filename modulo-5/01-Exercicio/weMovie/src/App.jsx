import './App.css'
import MovieList from './components/cards';
import listaDeFilmes from './database/database';

function App() {
  return (
    <div className="App">
      <h1>Filmes</h1>
      <MovieList movies={listaDeFilmes} />
    </div>
  );
}

export default App
