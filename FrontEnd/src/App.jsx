import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Sell from "./components/pages/Sell";
import Watches from "./components/pages/Watches";
import ProtectedRoute from "./protectedRouter";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Handle the error, e.g., log it or display a user-friendly message
    console.error(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/profile"
                element={<ProtectedRoute element={<Profile />} />}
              />
              <Route
                path="/sell"
                element={<ProtectedRoute element={<Sell />} />}
              />
              <Route path="/watches" element={<Watches />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
