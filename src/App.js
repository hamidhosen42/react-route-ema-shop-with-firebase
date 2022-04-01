import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import Inventory from "./Component/Inventory/Inventory";
import Order from "./Component/Order/Order";
import { Routes, Route } from "react-router-dom";
import About from "./Component/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;