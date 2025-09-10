import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Videos from './pages/Videos';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/produto/:slug" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;