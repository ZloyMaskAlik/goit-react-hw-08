import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';

import css from './ContactsPage.module.css';

export default function ContactsPage () {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() => {
        toast.error(
          'OOPS... There was an issue fetching the contacts. Please try again later.'
        );
      });
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <Loader />}
      {Array.isArray(contacts) && contacts.length === 0 && (
        <p>You don&apos;t have any contacts yet.</p>
      )}
      {Array.isArray(contacts) && contacts.length > 0 && (
        <>
          <SearchBox />
          <ContactList />
        </>
      )}
    </div>
  );
};