import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topnav from "./components/common/Topnav";
import Sidebar from "./components/common/Sidebar";
import Addcomplaint from "./components/complaints/Addcomplaint";
import Viewcomplaint from "./components/complaints/Viewcomplaint";
import Approvedcomplaint from "./components/complaints/Approvedcomplaint";
import Generatenotice from "./components/generate/Generatenotice";
import Generateletters from "./components/generate/Generateletters";
import Generatereports from "./components/generate/Generatereports";
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Topnav />
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
