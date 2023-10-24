import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarmain from './component/Navbarmain';
import Cards from './component/Cards';

function App() {
  return (
    <div>

      <div className="App">
        <Navbarmain />
      </div>

      <div className="container-fluid">
        <div className="row">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>

    </div>
  );
}

export default App;
