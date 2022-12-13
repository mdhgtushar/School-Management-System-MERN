import { Route, Routes } from "react-router-dom";
import Notice from "./pages/Notice";
import Teachers from "./pages/Teachers";
import Magazine from "./pages/Magazine";
import Students from "./pages/Students";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Header from "./inc/Header";
import Admin from "./layout/Admin";
import Auth from "./layout/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forget from "./pages/auth/Forget";
import Client from "./layout/Client";

function App() {
  return (
    <div>
      <Routes>
        <Route path="admin" element={<Admin />}>
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="notice" element={<Notice />} />
          <Route path="magazine" element={<Magazine />} />
          <Route path="events" element={<Event />} />
          <Route path="result" element={<Result />} />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget" element={<Forget />} />
        </Route>

        <Route path="/" element={<Client />}>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={"Page Not Found"} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
