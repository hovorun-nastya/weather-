import React, {useCallback, useState} from 'react';

const SearchCityComponent = ({saveSearch}: any) => {
  const [value, setValue] = useState('')

  const onClick = useCallback(() => {
    setValue('')
    saveSearch(value)
  }, [saveSearch, setValue, value])

  return (
    <>
      <input
        value={value}
        id="city"
        placeholder={"Введіть місто"}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClick} disabled={!value}>
        Show
      </button>

    </>
  );
};

export default SearchCityComponent;
