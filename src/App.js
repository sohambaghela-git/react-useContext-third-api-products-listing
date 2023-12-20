import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Card from './components/Card';
import Header from './components/Header'; 
import ProductContextProvider from './context/ProductContextProvider';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Header />
        <Home />
        <Routes>
          <Route path="/Table" element={<Table />} />
          <Route path="/About" element={<About />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </ProductContextProvider>
    </div>
  );
}

export default App;
