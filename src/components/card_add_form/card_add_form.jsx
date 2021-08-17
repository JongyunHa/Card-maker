import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now, // uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    addCard(card);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        placeholder="name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        placeholder="company"
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="theme"
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        placeholder="title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        placeholder="email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
