import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

import css from './Contact.module.css';


export default function Contact({ id, name, number }){
  const dispatsch = useDispatch();

  const handleDelete = () => {
    dispatsch(deleteContact(id));
  };

  return (
    <>
      <li className={css.item}>
        <div>
          <p className={css.text}>
            <span className={css.span} role="img" aria-label="Contact Name">
            🤠
            </span>
            {name}
          </p>
          <p>
            <span className={css.span} role="img" aria-label=" Number">
            ☎️
            </span>
            {number}
          </p>
        </div>
        <button className={css.btn} type="button" onClick = {handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};
