import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './layouts.scss';

export const HomeLayout: FC = () => {
  return (
    <div className="layout__home">
      <Outlet />
    </div>
  );
};
