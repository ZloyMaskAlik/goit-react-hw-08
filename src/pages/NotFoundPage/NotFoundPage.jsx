import notFoundImg from '../../assets/404_error.svg';

import css from './NotFoundPage.module.css';

export default function NotFoundPage () {
  return (
    <div className={css.notFoundContainer}>
      <img className={css.notFoundImg} src={notFoundImg} alt="Not Found Page" />
    </div>
  );
};
