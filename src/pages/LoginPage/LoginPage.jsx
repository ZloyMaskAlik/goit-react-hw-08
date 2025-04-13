import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';

import css from './LoginPage.module.css';

export default function LoginPage () {
  return (
    <div className={css.formContainer}>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </div>
  );
};