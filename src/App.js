import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404"
import Posts from "./pages/Posts";
import Header from "./components/Header";
import Categoria from "./pages/Categoria";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/posts/:id"  element={<Posts/>}/>
        <Route path="/categoria/:id/*"  element={<Categoria/>}/>
        <Route path="*" element={<Page404/>} />
      </Routes>

    </Router>
  );
}

export default App;
