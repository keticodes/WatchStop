import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
