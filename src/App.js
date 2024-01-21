
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';
import Team from './components/Team/Team';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* component */}
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Portfolio/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
