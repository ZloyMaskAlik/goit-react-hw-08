import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../redux/contactsSlice';

import Contact from '../Contact/Contact';

import css from './ContactList.module.css';
import { selectNameFilter } from '../redux/filtersSlice';

export default function ContactLis () {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => handleDelete(contact.id)}
          />
        ))}
      </ul>
    </>
  );
};