import { ChangeEvent, FC } from 'react';
import { Search } from 'react-feather';



import { SearchBarWrapper, SearchIconContainer, SearchInput } from './SearchBar.styles';


type SearchBarProps = {
  placeholder: string;
  onChange: (value: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ placeholder, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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