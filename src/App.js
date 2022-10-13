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
      <Routes>
        <Route path="/" component={Content}/>
        <Route path="/test" component={Test}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
