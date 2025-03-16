import styles from './contact.module.css';

function ContactPage() {
  return (
    <section className={styles.section}>
      <p className={styles.title}>Contact</p>
      <p className={styles.description}>Let Connect!</p>

      <form>
        <div className={styles.control}>
          <label>Name</label>
          <div className={styles.row}>
            <div className={`${styles.control} ${styles.sub}`}>
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" />
            </div>
            <div className={`${styles.control} ${styles.sub}`}>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" />
            </div>
          </div>
        </div>

        <div className={styles.control}>
          <label htmlFor="email">Email</label>
          <input className={styles.email} type="text" id="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="email">Message</label>
          <textarea rows={10} cols={48} />
        </div>
        <div className={styles.formActions}>
          <button className={styles.button}>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
