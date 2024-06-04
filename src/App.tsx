import { Route, Routes } from "react-router-dom";
import About from "./Components/BT01/About";
import Contact from "./Components/BT01/Contact";
import Home from "./Components/BT01/Home";
import BT02 from "./Components/BT02/BT02";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="" element={<BT02></BT02>}>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </>
  );
}
