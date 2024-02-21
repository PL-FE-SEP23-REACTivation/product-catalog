import { useSearchParams } from 'react-router-dom';
import './Search.scss';
import { useState } from 'react';
import useDebounce from './debounce';

export const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const debounce = useDebounce(setSearchParams, 500);
  const search = searchParams.get('search');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;

    setInputValue(value);

    searchParams.set('search', value);

    if (value === '') {
      searchParams.delete('search');
    }

    debounce(searchParams);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={search || inputValue}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};
