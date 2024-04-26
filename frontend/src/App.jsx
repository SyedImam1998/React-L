import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DisplayData } from "./component/DisplayData";
import Login from "./component/Login";
import ProtectComponent from "./component/ProtectComponent";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route
        path="/"
        element={<ProtectComponent component={<DisplayData></DisplayData>} />}
      ></Route>
      <Route
        path="/display-2"
        element={<ProtectComponent component={<DisplayData></DisplayData>} />}
      ></Route>
    </Routes>
  );
}

export default App;
