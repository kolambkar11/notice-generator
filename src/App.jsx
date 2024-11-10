import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Addcomplaint from "./components/complaints/Addcomplaint";
import Viewcomplaint from "./components/complaints/Viewcomplaint";
import Approvedcomplaint from "./components/complaints/Approvedcomplaint";
import Generatenotice from "./components/generate/Generatenotice";
import Generateletters from "./components/generate/Generateletters";
import Generatereports from "./components/generate/Generatereports";
import Login from "./components/auth/Login";
import Notfound from "./components/common/Notfound";
import Navbar from "./components/common/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            activeClassName="active_class"
            exact
            path="/"
            element={<Dashboard />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/add-complaint"
            element={<Addcomplaint />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/view-complaints"
            element={<Viewcomplaint />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/approved-complaints"
            element={<Approvedcomplaint />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/generate-notice"
            element={<Generatenotice />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/generate-letters"
            element={<Generateletters />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/generate-reports"
            element={<Generatereports />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/login"
            element={<Login />}
          ></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
