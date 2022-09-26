import { Link, Route, Routes } from "react-router-dom";
import Notice from "./pages/Notice";
import Teachers from "./pages/Teachers";
import Magazine from "./pages/Magazine";
import Students from "./pages/Students";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <div>
      <div className="header">
        <h2>
          <Link to="/">
            Modern school V1.0<small>(client.beta)</small>
          </Link>
        </h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          {/* <li>
            <Link to="/notice">Notice</Link>
          </li>
          <li>
            <Link to="/magazine">Magazine</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li> */}
          <li>
            <Link to="/result">Result</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/events" element={<Event />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
