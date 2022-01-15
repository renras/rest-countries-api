import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { appActions } from "../../Store/appSlice";

const useFetch = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const countries = useSelector((state) => state.app.countries);
  const borderCountries = useSelector((state) => state.app.borderCountries);
  const currentCountry = countries.find((country) => country.name === name);
  const getCurrencies = () => {
    try {
      return currentCountry.currencies[0].name;
    } catch (error) {}
  };
  const languages = currentCountry.languages.map((language) => language.name);

  useEffect(() => {
    if ("borders" in currentCountry) {
      const borders = currentCountry.borders;
      const newCountries = countries.filter((country) =>
        borders.includes(country.alpha3Code)
      );
      dispatch(appActions.setBorderCountries(newCountries));
    }
    if (!("borders" in currentCountry)) {
      dispatch(appActions.setBorderCountries([]));
    }
  }, [dispatch, currentCountry, countries]);

  return { currentCountry, getCurrencies, languages, borderCountries };
};

export default useFetch;
