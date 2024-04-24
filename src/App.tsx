import "./App.css";
import DoCard from "./components/DoCard";
import DoingCard from './components/DoingCard'
import DoneCard from './components/DoneCard'

function App() {
  return (
    <>
      <div className="container">
        <div className="cards">
            <DoCard></DoCard>
            <DoingCard></DoingCard>
            <DoneCard></DoneCard>
        </div>
      </div>
    </>
  );
}

export default App;
