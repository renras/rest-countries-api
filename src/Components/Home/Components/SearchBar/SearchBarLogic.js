import { useSelector, useDispatch } from "react-redux";

import { searchBarActions } from "../../../../Store/searchBarSlice";

const useFetch = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.searchBar.textInput);

  const handleChange = (e) => {
    const event = e.target.value;
    dispatch(searchBarActions.handleChange(event));
  };

  return { text, handleChange };
};

export default useFetch;
