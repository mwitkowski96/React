import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import React from 'react';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}>Nowy komponent</h2>
        <Hero />
      </section>
    )
  }
}

export default List;
