import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header/Header';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

export default function App() {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <Header />
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length === 0 ? (
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
}
