import phonebookImg from '../../../public/phonebook.svg';

import css from './HomePage.module.css';

export default function HomePage () {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.title}>
        Contacts book{' '}
      </h1>
      <img
        src={phonebookImg}
        alt="Phonebook image"
        width="360px"
        height="400px"
      />
    </div>
  );
};
