import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Category } from '../../types/categoryType';
import './Search.scss';
import useDebounce from './debounce';

type Props = {
  path: Category;
};

export const Search: FC<Props> = ({ path }) => {
  console.log(path);
  const [searchParams, setSearchParams] = useSearchParams();
  const debounce = useDebounce(setSearchParams, 500);
  // const search = searchParams.get('search');
  const [search, setSearch] = useState(searchParams.get('search') || '');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;

    setSearch(value);

    searchParams.set('search', value);

    if (value === '') {
      searchParams.delete('search');
    }

    debounce(searchParams);
  };

  useEffect(() => {
    searchParams.delete('search');
    setSearchParams(searchParams);
    setSearch('');
  }, [path]);

  return (
    <div className="search">
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};
