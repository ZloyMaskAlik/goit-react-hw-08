import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';



export default function ContactLis () {
    const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </>
  );
};