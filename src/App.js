import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/Test";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Homepage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default App;
