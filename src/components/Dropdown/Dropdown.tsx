import classNames from 'classnames';
import { FC, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { capitalize, getSearchParams } from '../../utils/helpers';
import './Dropdown.scss';

type Props = {
  name: string;
  options: string[];
  paramName: string;
  className?: string;
};

export const Dropdown: FC<Props> = ({
  name,
  options,
  paramName,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const param = searchParams.get(paramName) || options[0];

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`dropdown ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <p className="dropdown__label">{name}</p>
      <button
        className={classNames('dropdown__button', {
          'dropdown__button--open': isOpen,
        })}
      >
        {capitalize(param)}
      </button>
      <div className="dropdown__whitespace" />
      <div
        className={classNames('dropdown__options options', {
          'dropdown__options--open': isOpen,
        })}
      >
        {options.map((option) => {
          const value = String(option).toLowerCase().replaceAll(' ', '-');
          const newParams = getSearchParams(searchParams, [paramName, value]);
          return (
            <Link
              key={option}
              onClick={handleClose}
              to={`?${newParams}`}
              className={classNames('options__option', {
                'options__option--active': value === param,
              })}
            >
              {typeof option === 'number' ? option : capitalize(option)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
