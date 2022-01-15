import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./App.module.css";
import CountryInfo from "./Pages/CountryInfo/CountryInfo";
import useFetch from "./AppLogic.js";
import Error from "./Pages/Error/Error";

function App() {
  const { status } = useFetch();

  return (
    <>
      {status === "success" ? (
        <>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/country-info/:name"
                element={<CountryInfo />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </>
      ) : (
        <AiOutlineLoading3Quarters className={styles.loadingIcon} />
      )}
    </>
  );
}

export default App;
