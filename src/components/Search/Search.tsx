// import classNames from 'classnames';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { capitalize, getSearchParams } from '../../utils/helpers';
import './Search.scss';

export const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  const [searchParams] = useSearchParams();
  const param = searchParams.get('search');
  console.log(param);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search">
      <input type="text" value={search} onChange={handleChange} />
    </div>
  );
};
