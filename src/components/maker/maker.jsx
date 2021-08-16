import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Jongyun',
      company: 'Samsung',
      theme: 'light',
      email: 'dev@jongyun.com',
      message: 'go for it',
      file: 'jongyun',
      fileURL: 'jongyun.png',
    },
    {
      id: '2',
      name: 'Jongyun',
      company: 'Samsung',
      theme: 'light',
      email: 'dev@jongyun.com',
      message: 'go for it',
      file: 'jongyun',
      fileURL: 'jongyun.png',
    },
    {
      id: '3',
      name: 'Jongyun',
      company: 'Samsung',
      theme: 'light',
      email: 'dev@jongyun.com',
      message: 'go for it',
      file: 'jongyun',
      fileURL: 'jongyun.png',
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) history.push('/');
    });
  }, []);
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
