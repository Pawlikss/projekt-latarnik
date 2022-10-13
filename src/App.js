import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
