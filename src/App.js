import './App.css';
import NavbarComponent from './components/NavbarComponent'; 
import Footer from './components/Footer'; 
import Hero from './components/Hero'; 
import ToolsCombined from './components/ToolsCombined';

function App() {
  return (
    <div className="App">
        <NavbarComponent/>
        <Hero/>
        <ToolsCombined/>
        <Footer/>
    </div>
  );
}


export default App;


