
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Events from './components/ListEvents/Events' 
import Signup from './components/routes/Signup'
import { Route, Routes } from "react-router-dom";
import Header from "./components/navbar/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Events />
    </>
  );
}

export default App;
