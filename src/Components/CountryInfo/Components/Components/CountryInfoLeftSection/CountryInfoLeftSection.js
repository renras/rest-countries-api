import React from "react";

const CountryInfoLeftSection = ({ currentCountry }) => {
  return (
    <ul>
      <li>
        <b>Native Names</b>: {currentCountry.nativeName}
      </li>
      <li>
        <b>Population</b>: {currentCountry.population}
      </li>
      <li>
        <b>Region</b>: {currentCountry.region}
      </li>
      <li>
        <b>Sub Region</b>: {currentCountry.subregion}
      </li>
      <li>
        <b>Capital</b>: {currentCountry.capital}
      </li>
    </ul>
  );
};

export default CountryInfoLeftSection;
