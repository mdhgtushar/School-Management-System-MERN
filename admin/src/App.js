import { Route, Routes } from "react-router-dom";
import Notice from "./pages/Notice";
import ClientNotice from "./pages/client/Notice";
import Teachers from "./pages/client/Teachers";
import Magazine from "./pages/Magazine";
import ClientMagazine from "./pages/client/Magazine";
import AdminStudents from "./pages/Students";
import Students from "./pages/client/Students";
import Student from "./pages/client/Student";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Result from "./pages/Result";
import ClientResult from "./pages/client/Result";
import AdminTeachers from "./pages/Teachers"
import Classes from "./pages/Classes";
import Sections from "./pages/Sections";
import AdminNotice from "./pages/admin/Notice";
import Admin from "./layout/Admin";
import Auth from "./layout/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forget from "./pages/auth/Forget";
import Client from "./layout/Client";
import Teacher from "./pages/client/Teacher";
import AddTeacher from "./pages/admin/AddTeacher";
import Events from "./pages/client/Events";
import Redux from "./pages/Redux";


function App() {
  return (
    <div>
      <Routes>

        {/* Admin Routes are described */}
        <Route path="admin" element={<Admin />}>
          <Route path="students" element={<AdminStudents />} />
          <Route path="teachers" element={<AdminTeachers />} />
          <Route path="teachers/add" element={<AddTeacher />} />
          <Route path="classes" element={<Classes />} />
          <Route path="sections" element={<Sections />} />
          <Route path="notice" element={<AdminNotice />} />
          <Route path="magazine" element={<Magazine />} />
          <Route path="events" element={<Event />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={"Page Not Found"} />
        </Route>

        {/* Auth Route are described */}
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget" element={<Forget />} />
        </Route>

        {/* Client Route Are described */}
        <Route path="/" element={<Client />}>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<ClientResult />} />
          <Route path="/notice" element={<ClientNotice />} />
          <Route path="/magazine" element={<ClientMagazine />} />
          <Route path="/events" element={<Events />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<Teacher />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/*" element={"Page Not Found"} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
