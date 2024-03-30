import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const min = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const mul = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const div = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };
  
  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
      </form>
      <button onClick={plus}>add</button>
      <button onClick={min}>min</button>
      <button onClick={mul}>mul</button>
      <button onClick={div}>div</button>
      <button onClick={resetInput}>reset input</button>
      <button onClick={resetResult}>reset result</button>
    </div>
  );
}

export default App;
