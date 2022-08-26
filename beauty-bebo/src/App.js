import './App.css';
import UpperNavbar from './Components/UpperNavbar';
import MiddleNavbar from "./Components/MiddleNavbar"
import LowerNavbar from "./Components/LowerNavbar"
function App() {
  return (
    <div className="App">
      <UpperNavbar/>
      <MiddleNavbar/>
      <LowerNavbar/>
    </div>
  );
}

export default App;
