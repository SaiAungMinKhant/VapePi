import './App.scss';
import Bestdeals from './components/Bestdeals/Bestdeals';
import Header from './components/Header/Header';
import Member from './components/Member/Member';
import Products from './components/Products/Products';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Bestdeals />
      <Member />
      <Products />
      <Slider />
    </div>
  );
}

export default App;
