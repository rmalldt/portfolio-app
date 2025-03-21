import { useActionState, useState } from 'react';
import styles from './contact.module.css';
import { isEmail, isNotEmpty } from '../../util/validations';
import ErrorPage from '../error/error';
import { postMessage } from '../../lib/api';
import Loading from '../../components/spinner/loading';

type FormInitialData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  errors?: string[] | null;
};

function ContactPage() {
  const [error, setError] = useState<boolean>(false);

  const submitAction = async (
    prevFormState: FormInitialData,
    formData: FormData
  ): Promise<FormInitialData> => {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const message = formData.get('message');

    const errors = [];
    if (!isNotEmpty(firstName)) {
      errors.push('Please provide your first name.');
    }
    if (!isNotEmpty(lastName)) {
      errors.push('Please provide your last name.');
    }
    if (!isEmail(email)) {
      errors.push('Please provide valid email.');
    }
    if (!isNotEmpty(message)) {
      errors.push('Please provide message.');
    }
    if (errors.length > 0) {
      return { errors };
    }

    try {
      await postMessage({
        firstName,
        lastName,
        email,
        message,
      });
    } catch (err) {
      setError(true);
    }

    return { errors: null };
  };

  const [formState, formAction, pending] = useActionState<
    FormInitialData,
    FormData
  >(submitAction, {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    errors: null,
  });

  if (error) {
    return <ErrorPage isChildElement={true} />;
  }

  return (
    <section className={styles.section}>
      <p className={styles.title}>Contact</p>
      <p className={styles.description}>Lets Connect!</p>

      <form action={formAction}>
        <div className={styles.control}>
          <label>Name</label>
          <div className={styles.row}>
            <div className={`${styles.control} ${styles.sub}`}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" />
            </div>
            <div className={`${styles.control} ${styles.sub}`}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
          </div>
        </div>

        <div className={styles.control}>
          <label htmlFor="email">Email</label>
          <input className={styles.email} type="text" name="email" id="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={10} cols={48} />
        </div>
        {formState.errors && (
          <ul className={styles.errors}>
            {formState.errors.map(err => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <div className={styles.formActions}>
          <button className={styles.button} disabled={pending}>
            {pending ? <Loading /> : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
