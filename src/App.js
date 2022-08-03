import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Shared/Body/About/About";
import Blog from "./Shared/Body/Blog/Blog";
import Home from "./Shared/Body/Home/Home";
import Inventory from "./Shared/Body/Inventory/Inventory";
import Header from "./Shared/Header/Header/Header";
import Login from "./Shared/Body/Login/Login";

import RequireAuth from "./Shared/RequireAuth/RequireAuth";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Shared/Body/SignUp/SignUp";
import Footer from "./Shared/Footer/Footer/Footer";
import NotFound from "./Shared/Body/NotFound/NotFound";
import ProductDetail from "./Shared/Body/ProductDetail/ProductDetail";
import CheckOut from "./Shared/Body/CheckOut/CheckOut";
import Order from "./Shared/Body/Order/Order";
import AddItem from "./Shared/Body/AddItem/AddItem";
import ManageItem from "./Shared/Body/ManageItem/ManageItem";
import MyItems from "./Shared/Body/MyItems/MyItems";
import UpdateItem from "./Shared/Body/UpdateItem/UpdateItem";

function App() {
  return (
    <div className="App container-fluid">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <ProductDetail />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={
            <RequireAuth>
              <UpdateItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitem"
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
