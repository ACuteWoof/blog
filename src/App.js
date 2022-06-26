import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import View from "./Pages/View";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div style={{ minHeight: "100vh" }} data-theme={theme}>
      <Navbar />
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view/:id" element={<View />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
