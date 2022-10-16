import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Test2 from "./components/test2";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Homepage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/test2" element={<Test2/>}/>
      </Routes>
    </Router>
  );
}

export default App;
