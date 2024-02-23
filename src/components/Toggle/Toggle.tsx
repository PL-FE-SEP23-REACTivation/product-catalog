import React from 'react';
import './Toggle.scss';
import { useThemeStore } from '../../storage/ThemeStore';

type Props = {
  className: string;
};

const ToggleButton: React.FC<Props> = ({ className }) => {
  const { toggleDarkMode } = useThemeStore();

  return (
    <div className={`toggle ${className}`}>
      <label className="toggle__label">
        <input
          type="checkbox"
          onClick={toggleDarkMode}
          className="toggle__input"
        />
        <div className="toggle__icon"></div>
      </label>
    </div>
  );
};

export default ToggleButton;
