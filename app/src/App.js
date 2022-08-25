import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment} from './redux/features/counter'

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>total : {count}</div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
