import { useState } from "react";
import "./App.css";
import DoCard from "./components/DoCard";
import DoingCard from "./components/DoingCard";
import DoneCard from "./components/DoneCard";
import { DragDropContext, DropResult } from 'react-beautiful-dnd'; // Import DragDropContext

interface TodoT{
  name: string
  status: string
  id: number
}

function App() {
  const [todos, setTodos] = useState<TodoT[]>([])
  const data = JSON.parse(localStorage.getItem("todos") || "[]");
  const onDragEnd = (result: DropResult) => {
    console.log(result);
    setTodos(data);


    const { destination, source, draggableId } = result;

    if (!destination || destination.droppableId === source.droppableId) {
        return;
    }

    const draggedTodo = todos.find(todo => todo.id.toString() === draggableId);
    if (draggedTodo) {

        const updatedTodo = { ...draggedTodo, status: destination.droppableId };

        const updatedTodos = todos.map(todo => {
            if (todo.id === updatedTodo.id) {
                return updatedTodo;
            }
            return todo;
        });

        setTodos(updatedTodos);

        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
}


  return (
    <>
      <div className="container">
        <div className="cards">
          {/* Wrap the cards inside DragDropContext */}
          <DragDropContext onDragEnd={onDragEnd}>
            <DoCard></DoCard>
            <DoingCard></DoingCard>
            <DoneCard></DoneCard>
          </DragDropContext>
        </div>
      </div>
    </>
  );
}

export default App;
