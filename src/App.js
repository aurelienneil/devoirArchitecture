import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/acceuil';
import Inscription from './pages/inscription';
import Apropos from './pages/Apropos';
import Auteurs from './pages/auteurs';
import Porduit from './pages/produit';
import Home from './pages/homPage';
function App() {
  return (

      <Router>
        <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/auteurs" element={< Auteurs/>} />
        <Route path="/connexion" element={<Apropos />} />
        <Route path="/produit" element={<Porduit />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
