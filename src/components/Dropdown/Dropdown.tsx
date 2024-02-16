import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { capitalize } from '../../utils/helpers';
import './Dropdown.scss';

type Props = {
  name: string;
  options: string[] | number[];
  paramName: string;
  className?: string;
};

export const Dropdown: FC<Props> = ({
  name,
  options,
  paramName,
  className,
}) => {
  const [activeParam, setActiveParam] = useState(String(options[0]));
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get(paramName) || options[0];
  const id = name.toLowerCase().replaceAll(' ', '-');

  useEffect(() => {
    searchParams.set(paramName, activeParam);
    setSearchParams(searchParams);
  }, [activeParam]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveParam(event.target.value);
    const select = document.getElementById(id);
    select?.blur();
  };

  return (
    <div className={`dropdown ${className}`}>
      <label htmlFor={id} className="dropdown__label">
        {name}
      </label>
      <select
        name={id}
        id={id}
        className="dropdown__select select"
        onChange={handleChange}
        value={param}
      >
        {options.map((option) => (
          <option
            key={option}
            value={String(option).toLowerCase().replaceAll(' ', '-')}
            className="select__option"
          >
            {typeof option === 'number' ? option : capitalize(option)}
          </option>
        ))}
      </select>
    </div>
  );
};
