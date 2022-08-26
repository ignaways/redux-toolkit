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
      <h2> COUNT : {datas.count} </h2>
      <div>
        <button
          className="Button"
          onClick={() => dispatch(decrement())}> Decrement </button>
        <button
          className="Button"
          onClick={() => dispatch(increment())}> Increment </button>
      </div>
      <p>Count in multiples</p>
      <input
        className="Input"
        onChange={setNumberHandler}
        type="text"
        value={datas.num}
      />
    </div>
  );
}

export default App;
