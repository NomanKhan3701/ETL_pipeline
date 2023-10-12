import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Home from "@/containers/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./containers/Login/Login";
import { toast } from "react-toastify";
import axios from "axios";
import * as actions from "./store/actions";
import Page404 from "./containers/Page404/Page404";

function App() {
  const token = useSelector((state) => state.auth.token);
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ];

  return (
    <div className="App">
      {token ? (
        <div className="Main__container">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
