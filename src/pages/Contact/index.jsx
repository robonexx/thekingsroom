import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.text}>Contact</h1>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='mailto:marcioakaratinho@gmail.com'
      >
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default Contact;
