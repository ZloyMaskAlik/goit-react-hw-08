import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import css from './ContactForm.module.css';

const userSchema = Yup.object().shape({
    username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
    phone: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = { username: '', phone: '' };

export default function ContactsForm () {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameFieldId = nanoid();
  const phoneFieldId = nanoid();

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
      id: nanoid(),
      name: values.username,
      number: values.phone,
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
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
          <label
            className={`${css.label} ${css.labelWithSpace}`}
            htmlFor={phoneFieldId}
          >
            Number
          </label>
          <Field
            className={css.input}
            type="text"
            name="phone"
            id={phoneFieldId}
          />
          <ErrorMessage className={css.errorPhone} name="phone" component="span" />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

