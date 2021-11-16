import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "./Store/appSlice";

const useFetch = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.app.status);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return { status };
};

export default useFetch;
