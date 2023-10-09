import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Sell from "./components/pages/Sell";
import ProtectedRoute from "./protectedRouter";
import useAuth from "./components/Hooks/useAuth";

function App() {
  const auth = useAuth(); // Declare 'auth' with 'const'

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
            {auth && (
              <>
                <Route
                  path="/profile"
                  element={<ProtectedRoute element={<Profile />} />}
                />
                <Route
                  path="/sell"
                  element={<ProtectedRoute element={<Sell />} />}
                />
              </>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
