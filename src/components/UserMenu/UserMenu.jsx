import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';

import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu (){
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => dispatch(logout());

  return (
    <div className={css.wrapper}>
      {user && <p className={css.username}>Welcome, {user.name}</p>}
      <button className={css.btn} type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};
