import { BrowserRouter, Route, Routes } from "react-router-dom";
import Galeria from "./views/Galeria";
import Navbar from "./components/Navbar";
import AppProvider from "./context/AppContext";
import Favorites from "./views/Favorites";
import Footer from "../src/components/Footer";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Galeria />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<h1>:( Pagina no encontrada)</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
