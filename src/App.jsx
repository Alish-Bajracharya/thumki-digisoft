import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import { Rooms } from "./pages/Rooms";
import About from "./pages/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2s, then popup
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Loader */}
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {/* Main Routes */}
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/About" element={<About />} />

        </Routes>
      )}

    </Router>
  );
}

export default App;
