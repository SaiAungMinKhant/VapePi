import './App.scss';
import Bestdeals from './components/Bestdeals/Bestdeals';
import Header from './components/Header/Header';
import Member from './components/Member/Member';

function App() {
  return (
    <div className="App">
      <Header />
      <Bestdeals />
      <Member />
    </div>
  );
}

export default App;
