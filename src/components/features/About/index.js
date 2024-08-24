import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import axios from "axios";

const About = () => {
  const [state, setState] = useState(0);
  const [input, setInput] = useState("");
  const [fetchType, setFetchType] = useState("posts");
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("before return");
    fetch(`https://jsonplaceholder.typicode.com/${fetchType}`)
      .then((response) => response.json())
      .then((d) => setData(d))
      .then((json) => console.log(json));

    return () => {
      console.log("return");
      return setData(null);
    };
  }, [fetchType]);

  const incrementHandler = () => {
    setState((prevState) => prevState + 1);
  };

  const decrementHandler = () => setState(state - 1);

  return (
    <div>
      <Header title="Expense Tracker About" />

      <div>
        <div>
          <button type="button" onClick={() => setFetchType("users")}>
            Users
          </button>
          <button type="button" onClick={() => setFetchType("posts")}>
            Posts
          </button>
          <button type="button" onClick={() => setFetchType("todos")}>
            Todos
          </button>
        </div>

        <div>{JSON.stringify(data)}</div>
      </div>

      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div>
        <button type="button" onClick={incrementHandler}>
          +
        </button>
        <span>{state}</span>
        <button type="button" onClick={decrementHandler}>
          -
        </button>
      </div>
    </div>
  );
};

export default About;
