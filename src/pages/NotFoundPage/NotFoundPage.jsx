import notFoundImg from '../../assets/image/404.jpg';

import css from './NotFoundPage.module.css';

export default function NotFoundPage () {
  return (
    <div className={css.notFoundContainer}>
      <img className={css.notFoundImg} src={notFoundImg} alt="Not Found Page" />
    </div>
  );
};
