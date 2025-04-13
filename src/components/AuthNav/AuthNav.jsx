import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './AuthNav.module.css';

export default function buildLinkClass({ isActive }){
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div className={css.authNavContainer}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};