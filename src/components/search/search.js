import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, apiOptions } from '../../api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (searchValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=30000&namePrefix=${searchValue}`,
      apiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((location) => {
            return {
              value: `${location.latitude} ${location.longitude}`,
              label: `${location.name} ${location.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder="Enter Location"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
