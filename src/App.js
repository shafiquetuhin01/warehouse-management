import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Shared/Body/About/About";
import Blog from "./Shared/Body/Blog/Blog";
import Home from "./Shared/Body/Home/Home";
import Inventory from "./Shared/Body/Inventory/Inventory";
import Header from "./Shared/Header/Header/Header";
import Login from "./Shared/Body/Login/Login";

function App() {
  
  return (
    <div className="App container-fluid bg-secondary">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Login></Login>
    </div>
  );
}

export default App;
