import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage () {
  return (
    <div className={css.formContainer}>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm />
    </div>
  );
};
