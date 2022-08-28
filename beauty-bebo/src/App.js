import './App.css';
import MakeupNavbar from './Components/MakeupNavbar';
import UpperNavbar from './Components/UpperNavbar';
import MiddleNavbar from "./Components/MiddleNavbar"
import LowerNavbar from "./Components/LowerNavbar"
import NewArrivalProduct from './Components/NewArrivalProducts';
import FooterComponent from './Components/Footer';
function App() {
  return (
    <div className="App">
      <UpperNavbar/>
      <MiddleNavbar/>
      <LowerNavbar/>
      <NewArrivalProduct/>
      <MakeupNavbar/>
      <FooterComponent/>
    </div>
  );
}

export default App;
