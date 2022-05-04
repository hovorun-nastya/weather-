import React, {useState} from 'react';

const SearchCityComponent = ({setCity}: any) => {
  const [value, setValue] = useState('')

  const onClick = () => {
    setCity(value)
    setValue('')
  }

  return (
    <>
      <input
        value={value}
        id="city"
        placeholder={"Введіть місто"}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClick}>
        Show
      </button>

    </>
  );
};

export default SearchCityComponent;
