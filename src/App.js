import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Github from './components/Github';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Github/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
