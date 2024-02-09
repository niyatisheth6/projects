import { Route, Routes } from "react-router-dom";
import Home from "./componets/Home";
import FormData from "./componets/FormData";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-data" element={<FormData />} />
      </Routes>
    </div>
  );
}

export default App;
