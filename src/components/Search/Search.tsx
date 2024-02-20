import { useSearchParams } from 'react-router-dom';
import './Search.scss';
import { useState } from 'react';

export const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  // const search = searchParams.get('search');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;

    setInputValue(value);

    if (!inputValue) {
      searchParams.delete('search');
    }
    searchParams.set('search', value);
    setSearchParams(searchParams);
  };

  return (
    <div className="search">
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};
