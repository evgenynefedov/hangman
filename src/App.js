import './App.css';
import Solution from './components/solution';
import Score from './components/score';
import Letters from './components/letters';

function App() {

  let solution = ['_', '_', '_', '_', '_']
  let score = 100

  return (
    <div class="container container-app">
      <Score score={score} />
      <Solution solution={solution} />
      <Letters />
    </div>
  );
}

export default App;
