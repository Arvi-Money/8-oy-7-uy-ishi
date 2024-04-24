import "./index.css";
import { SyntheticEvent ,useState } from 'react';
import { inputT, tasksT, } from '../Types'
// import img from '../assets/journal_album_icon_160023.png'

function Card() {
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
        <p>Doing</p>
        <p>...</p>
      </div>
      <form onSubmit={handleSubmit} className="d-flex">
        <div>
          <button className="plus-btn" type="submit" onClick={handleSubmit} >
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
        <div>
          {/* <img src={img} alt="" width="16px" height="16px" color="white"/> */}
        </div>
      </form>
      <div className="todo">
        <div className="tasks">
          {tasks.length > 0 &&
            tasks.map((el, index) => {
              return (
                <div className="task" key={index}>
                  <h2>{el}</h2>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Card;