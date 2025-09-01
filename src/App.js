import {BrowserRouter,Routes, Route} from "react-router-dom";
import Productpage from './components/Productpage';
import Nestedcheckbox from './components/Nestedcheckbox';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productpage" element={<Productpage />} />
        <Route path="/nestedcheckbox" element={<Nestedcheckbox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
