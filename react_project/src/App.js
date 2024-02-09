import { Route, Routes } from "react-router-dom";
import Login from "./component/(auth)/login/Login";
import SignUp from "./component/(auth)/signup/SignUp";
import DashBoard from "./component/(dashboard)/DashBoard";
import CreateAdmin from "./component/(listing)/CreateAdmin";
import AdminDetails from "./component/(table-data)/AdminDetails";
import WithoutAuthentication from "./routes/WithoutAuthentication";
import WithAuthentication from "./routes/WithAuthentication";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/login" element={<WithoutAuthentication Component={Login} />} />
        <Route path="/signup" element={<WithoutAuthentication Component={SignUp} />} />
        <Route path="/" element={<WithAuthentication Component={DashBoard} />} />
        <Route path="/create-admin" element={<WithAuthentication Component={CreateAdmin} />} />
        <Route path="/table-data" element={<WithAuthentication Component={AdminDetails} />} />
      </Routes>
    </div>
  );
}

export default App;
