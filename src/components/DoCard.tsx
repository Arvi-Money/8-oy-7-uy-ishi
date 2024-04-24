import "./index.css";
import { useState, SyntheticEvent } from "react";
import { inputT,  tasksT} from "../Types";

function DoCard() {
  const [input, setInput] = useState<inputT>("");
  const [tasks, setTasks] = useState<tasksT>([]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setTasks((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <div className="card">
      <div className="title">
        <p>Have to do</p>
        <p>...</p>
      </div>
      <div className="tasks">
          {tasks.length > 0 &&
            tasks.map((el, index) => {
              return (
                <div className="task" key={index}>
                  <h5>{el}</h5>
                </div>
              );
            })}
        </div>
      <form onSubmit={handleSubmit} style={{padding: '8px 8px 0px'}}>
        <div>
          <button className="plus-btn" type="submit" onClick={handleSubmit}>
            +
          </button>
          <input
            type="text"
            placeholder="Add a card"
            value={input}
            onChange={(e) => {
              setInput(String(e.target.value));
            }}
          />
        </div>

      </form>
    </div>
  );
}

export default DoCard;
