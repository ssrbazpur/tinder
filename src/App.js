import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Swipe from "./Swipe";

function App() {
  return (
    <div className="App">
      <Header className={{ padding: 100 }} />
      <br></br>
      <Card />
      <br></br>
      <Swipe />
      {/* Header Component*/}
      {/* Card Component */}
      {/* Swipe Button */}
    </div>
  );
}

export default App;
