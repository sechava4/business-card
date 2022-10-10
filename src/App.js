import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
  return (
    <div className='Page'>
      <div className='App-container'>
        <Info />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
