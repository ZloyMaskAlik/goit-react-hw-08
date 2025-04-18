import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from '@reduxjs/toolkit';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

import css from './ContactForm.module.css';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = { name: '', number: '' };

export default function ContactsForm () {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleSubmit = (values, action) => {
    const isDuplicate = contacts.some(
      contact => contact?.name?.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      toast.error(`${values.name} is already in contacts.`);
      action.resetForm();
      return;
    }

    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact))
      .unwrap()
      .catch(() => {
        toast.error('OOPS... Failed to add contact. Please try again.');
      });

    action.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label
            className={css.label}
            htmlFor={numberFieldId}
          >
            Number
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.errorNumber} name="number" component="span" />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};