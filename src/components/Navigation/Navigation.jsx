import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';
import homeLogo from '../../assets/home_icon.svg'
import bookLogo from '../../assets/account.svg'

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

export default function Navigation () {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavLink className={buildCssClasses} to="/">
        <img src={homeLogo} className={css.home} alt="Home logo" />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          <img src={bookLogo} className={css.home} alt="Contact logo" />
          Contacts
        </NavLink>
      )}
    </>
  );
};