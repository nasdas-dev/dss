import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assessment from "./routes/Assessment";
import Questions from "./routes/Questions";
import SignUp from "./routes/SignUp";
import Dashboard from "./routes/Dashboard";
import TableView from "./routes/TableView";
import Login from "./routes/Login";
import User from "./routes/User";
import Anatomy from "./components/elearning_modules/Anatomy";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="assessment/questions" element={<Questions />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cves" element={<TableView />} />
        <Route path="users" element={<TableView />} />
        <Route path="learnings" element={<TableView />} />
        <Route path="learnings/anatomy" element={<Anatomy />} />
        <Route path="login" element={<Login />} />
        <Route path="users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
