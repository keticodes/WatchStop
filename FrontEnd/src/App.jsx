import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Sell from "./components/pages/Sell";
import Watches from "./components/pages/Watches";
import ProtectedRoute from "./protectedRouter";
import useAuth from "./components/Hooks/useAuth";
import React from "react";
import "./app.css";

function App() {
  const auth = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Protected routes */}
            <>
              <Route
                path="/profile"
                element={<ProtectedRoute element={<Profile />} />}
              />
              <Route
                path="/sell"
                element={<ProtectedRoute element={<Sell />} />}
              />
              <Route
                path="/watches"
                element={<ProtectedRoute element={<Watches />} />}
              />
            </>
            z
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
