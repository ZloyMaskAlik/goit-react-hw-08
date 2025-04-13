import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { addContact } from '../../redux/contactsOps';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import css from './ContactForm.module.css';

const userSchema = Yup.object().shape({
    username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
    number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = { username: '', number: '' };

export default function ContactsForm () {
 const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleSubmit = (values, action) => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === values.username.toLowerCase()
    );

    if (isDuplicate) {
      toast.error(`${values.username} is already in contacts.`);
      action.resetForm();
      return;
    }

    const newContact = {
      name: values.username,
      number: values.number,
    };
    dispatch(addContact(newContact));
    action.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor="username">
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="username"
            id="username"
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
          <label
            className={`${css.label} ${css.labelWithSpace}`}
            htmlFor="number"
          >
            Number
          </label>
          <Field className={css.input} type="text" name="number" id="number" />
          <ErrorMessage className={css.errorNumber} name="number" component="span" />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};