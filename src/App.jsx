import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SinInSingUp from "./Components/Auth";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SinInSingUp />} />
          <Route path="/chat" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
