import React from 'react';
import { Search } from 'react-feather';

import { SearchBarWrapper, SearchIconContainer, SearchInput } from './SearchBar.styles';

type SearchBarProps = {
  placeholder: string;
  onChange: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <SearchBarWrapper>
      <SearchInput type="text" placeholder={placeholder} onChange={handleChange} />
      <SearchIconContainer>
        <Search />
      </SearchIconContainer>
    </SearchBarWrapper>
  );
};

export default SearchBar;
