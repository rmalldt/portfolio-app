import React from 'react';
import { createPortal } from 'react-dom';
import styles from './message-modal.module.css';

type MessageModalProps = {
  isOpen: boolean;
  message: string;
};

const MessageModal: React.FC<MessageModalProps> = ({ isOpen, message }) => {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <p>{message}</p>
      </div>
    </div>,
    document.body
  );
};

export default MessageModal;
