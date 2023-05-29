import './App.scss';
import Bestdeals from './components/Bestdeals/Bestdeals';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Member from './components/Member/Member';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Bestdeals />
      <Member />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
