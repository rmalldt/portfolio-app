import React, { useActionState, useEffect, useRef, useState } from 'react';
import styles from './contact.module.css';
import { isEmail, isNotEmpty } from '../../util/validations';
import ErrorPage from '../error/error';
import { postMessage } from '../../lib/api';
import Loading from '../../components/spinner/loading';
import MessageModal from '../../components/modal/message-modal';

type FormInitialData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  errors?: string[] | null;
};

const ContactPage: React.FC = () => {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const [error, setError] = useState<boolean>(false);

  const showModal = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setIsMessageModalOpen(true);

    timerRef.current = setTimeout(() => {
      setIsMessageModalOpen(false);
    }, 3000);
  };

  // Cleanup timerRef on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

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
      const result = await postMessage({
        firstName,
        lastName,
        email,
        message,
      });
      if (result.acknowledged) {
        showModal();
      }
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
    <>
      <MessageModal
        isOpen={isMessageModalOpen}
        message="Message sent successfully."
      />
      <section className={styles.contact}>
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
            <input
              className={styles.email}
              type="text"
              name="email"
              id="email"
            />
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
    </>
  );
};

export default ContactPage;
