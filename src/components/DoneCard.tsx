import { SyntheticEvent, useEffect, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import './index.css'

 interface TodoT{
    name: string,
    status: string,
    id: number
  };

function DoneCard() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<TodoT[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("done") || "[]");
    setTasks(data)
  }, [])

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const todo: TodoT = {
        name: input,
        status: "todo",
        id: Date.now(),
      };

      const data = JSON.parse(localStorage.getItem("done") || "[]");
      data.push(todo);
      localStorage.setItem("done", JSON.stringify(data));
      setTasks(data);
      setInput("");
    }
  };

  return (
    <div className="card">
      <div className="title">
        <h1>Done</h1>
        <p>...</p>
      </div>
      <Droppable droppableId="doing">
        {(provided) => (
          <div className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((el, index) => (
              <Draggable key={el.id} draggableId={el.id.toString()} index={index}>
                {(provided) => (
                  <div
                    className="task"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <h5>{el.name}</h5>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <form onSubmit={handleSubmit} className="d-flex">
        <div className="input-div">
          <div>
            <p>+</p>
          </div>
          <input
            type="text"
            placeholder="Add a card"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default DoneCard;