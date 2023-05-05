// App.js
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { AuthGuard } from "./Components/AuthGuard";
import { Login } from "./Components/Login";
import { Table } from "./Components/Tables";
import { Dashboard } from "./Menu/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, useEffect } from "react";

import { ChangePassword } from "./Components/changePassword";

const App = () => {
  return (
    <Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="//*" element={<Login />} />

          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="/login/*" element={<Login />} /> */}

          <Route
            path="/dashboard"
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          />
          <Route
            path="/change-password"
            element={
              <AuthGuard>
                <ChangePassword />
              </AuthGuard>
            }
          />

          <Route
            path="/table/*"
            element={
              <AuthGuard>
                <Table />
              </AuthGuard>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
