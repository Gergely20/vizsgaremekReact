import './App.css';
import './css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fooldal from "./Fooldal"
import Fooldalam from "./oldalaim/Fooldalam";
import Rolunk from "./oldalaim/Rolunk";
import KepekesForras from "./oldalaim/KepekesForras";
import Csapatunk from "./oldalaim/Csapatunk";
import Tipusaink from "./oldalaim/Tipusaink";
import Velemeny from "./oldalaim/Velemeny";
import Keszlet from "./oldalaim/Keszlet";
import Regisztralas from "./oldalaim/Regisztralas";
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fooldal />}>
            <Route index element={<Fooldalam />} />
            <Route path="rolunk" element={<Rolunk />} />
            <Route path="kepekesforras" element={<KepekesForras />} />
            <Route path="csapatunk" element={<Csapatunk />} />
            <Route path="tipusaink" element={<Tipusaink />} />
            <Route path="velemeny" element={<Velemeny />} />
            <Route path="keszlet" element={<Keszlet />} />
            <Route path="regisztralas" element={<Regisztralas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
