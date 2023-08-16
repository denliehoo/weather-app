import React, { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { getCityAutoCompleteOptionsApi } from "../../api";

const AutoCompleteLocation = (props) => {
  const [search, setSearch] = useState(null);
  const { setCityDetails, resetAutoComplete, onResetAutoComplete } = props;

  const loadOptions = async (inputValue) => {
    return await getCityAutoCompleteOptionsApi(inputValue);
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    setCityDetails(searchData);
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
    />
  );
};

export default AutoCompleteLocation;

// import React, { useEffect, useState } from "react";
// import { AsyncPaginate } from "react-select-async-paginate";
// import axios from "axios";

// const AutoCompleteLocation = (props) => {
//   const [search, setSearch] = useState(null);
//   const { setCityDetails, resetAutoComplete, onResetAutoComplete } = props;

//   const geoApiOptions = {
//     headers: {
//       "X-RapidAPI-Key": "APIKEYHERE",
//       "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//     },
//   };

//   const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

//   const loadOptions = async (inputValue) => {
//     try {
//       const response = await axios.get(`${GEO_API_URL}/cities`, {
//         params: {
//           minPopulation: 1000000,
//           namePrefix: inputValue,
//         },
//         headers: geoApiOptions.headers,
//       });

//       const data = response.data;

//       const options = data.data.map((city) => ({
//         lat: city.latitude,
//         lon: city.longitude,
//         city: city.name,
//         country: city.countryCode,
//         value: `${city.latitude} ${city.longitude}`,
//         label: `${city.name}, ${city.countryCode}`,
//       }));

//       return { options };
//     } catch (error) {
//       console.error("Error loading options:", error);
//       return { options: [] };
//     }
//   };

//   const handleOnChange = (searchData) => {
//     setSearch(searchData);
//     setCityDetails(searchData);
//     console.log(searchData);
//   };

//   useEffect(() => {
//     if (resetAutoComplete) {
//       console.log("reset");
//       setSearch(null);
//       onResetAutoComplete();
//     }
//   }, [resetAutoComplete, onResetAutoComplete]);

//   return (
//     <AsyncPaginate
//       placeholder="Search for city"
//       debounceTimeout={600}
//       value={search}
//       onChange={handleOnChange}
//       loadOptions={loadOptions}
//     />
//   );
// };

// export default AutoCompleteLocation;
