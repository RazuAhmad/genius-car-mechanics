import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NavBarComponent from "./Components/NavBar/NavBar";
import Services from "./Components/NavBar/Home/Services";
import Pricing from "./Components/NavBar/Pricing/Pricing";
import LogIn from "./Components/NavBar/LogIn/LogIn";
import NotFound from "./Components/404NotFound/NotFound";
import SpecificService from "./Components/SpecificService/SpecificService";
import AuthProvider from "./Components/Hooks/AuthProvider";
import PrivateRoute from "./Components/Hooks/PrivateRoute";
const App = () => {
  return (
    <div>
      <AuthProvider>
        <NavBarComponent />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route
            path="/pricing"
            element={
              <PrivateRoute>
                <Pricing />
              </PrivateRoute>
            }
          />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/service/:serviceName" element={<SpecificService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
