import React, { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { getCityAutoCompleteOptionsApi } from "../../api";

const AutoCompleteLocation = (props) => {
  const [search, setSearch] = useState(null);
  const {
    setCityDetails,
    resetAutoComplete,
    onResetAutoComplete,
    setError,
    handleSearchWeather,
  } = props;

  const loadOptions = async (inputValue) => {
    const [isSuccess, options, err] = await getCityAutoCompleteOptionsApi(
      inputValue
    );
    if (isSuccess) return options;
    setError(err);
    return options;
    // return await getCityAutoCompleteOptionsApi(inputValue);
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    setError("");
    setCityDetails(searchData);
    handleSearchWeather(searchData);
  };

  useEffect(() => {
    if (resetAutoComplete) {
      setSearch(null);
      onResetAutoComplete();
    }
  }, [resetAutoComplete, onResetAutoComplete]);

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={{
        menu: (base) => ({
          ...base,
          zIndex: 3, // ensures it can cover the animation transition for the SearchResults
        }),
      }}
    />
  );
};

export default AutoCompleteLocation;
