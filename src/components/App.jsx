import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../redux/contactsSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header/Header';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import Loader from './Loader/Loader';


export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <Header />
        <h1>Phonebook</h1>
        <ContactForm />
        {isLoading && !error && <Loader />}
        {!isLoading && !error && contacts?.length === 0 ? (
          <p>You don&apos;t have any contacts yet.</p>
        ) : (
          <>
            <SearchBox />
            <ContactList />
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

