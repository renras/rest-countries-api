import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./App.module.css";
import CountryInfo from "./Components/CountryInfo/CountryInfo";
import useFetch from "./AppLogic.js";
import Error from "./Components/Error/Error";

function App({ authorized }) {
  const { status } = useFetch();

  return (
    <>
      {status === "success" ? (
        <>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/rest-countries-api" element={<Home />} />
              <Route
                path="/rest-countries-api/country-info/:name"
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
