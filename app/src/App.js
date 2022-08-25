import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, setNumber } from "./redux/features/counter";

function App() {
  const datas = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const setNumberHandler = (e) => {
    const value = e.target.value;
    dispatch(setNumber(+value));
  };

  return (
    <div className="App">
      <div>total : {datas.count}</div>
      <div>
        <button onClick={() => dispatch(decrement())}> Decrement </button>
        <button onClick={() => dispatch(increment())}> Increment </button>
      </div>
      <input onChange={setNumberHandler} type="text" value={datas.num} />
    </div>
  );
}

export default App;
