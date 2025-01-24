import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [flag, setFlag] = useState(true);
  const [flag2, setFlag2] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("its called");
  }, [flag, count]);

  //react provides this method(useEffect) through which we can do something
  //during mount phase, update phase,unmount phase.

  //the callback function inside the useEffect gets called.

  //when there is no any dependency or even an empty array
  //then the useEffect gets called every time if any state change
  //if any of the button is clicked or any state change happens
  //useEffect will gets called.

  //when there is an empty dependency array
  //the useEffect gets called only once when the component gets mount
  //after that if we change the state it dosent gets called.

  //when we gives dependencies in an array
  //then the useEffect gets called when the state changes acc to
  //the provided dependencies and also on mount phase

  return (
    <div className="App">
      <button onClick={() => setFlag(!flag)}>{flag.toString()}</button>
      <button onClick={() => setFlag2(!flag2)}>{flag2.toString()}</button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
