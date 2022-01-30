import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HashLoader } from "react-spinners";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Error from "./components/Error";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex w-screen h-screen bg-gray-100">
          <div className="w-full h-5/6 flex flex-col items-center justify-center scale-75 md:scale-100 space-y-20">
            <div className="text-2xl">Just a second</div>
            <HashLoader size={70} color={"#111827"} loading={loading} />
          </div>
        </div>
      ) : (
        <Router basename="/selimmh-me">
          <div className="bg-gray-100 text-gray-800 flex justify-center items-center dark:bg-gray-800 dark:text-gray-100">
            <div className="h-auto w-11/12">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Error />} />
              </Routes>
            </div>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
