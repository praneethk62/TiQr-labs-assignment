
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Events from './components/ListEvents/Events' 
import Signup from './components/routes/Signup'
import { Route, Routes } from "react-router-dom";
import Header from "./components/navbar/Header";
import UserInvite from './components/routes/UserInvite';
import Userapprovel from "./components/routes/Userapprovel";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UserInvite" element={<UserInvite />} />
        <Route path="/" element={<Events />} />
        <Route path="/Userapprovel" element={<Userapprovel />} />
      </Routes>
     
    </>
  );
}

export default App;
