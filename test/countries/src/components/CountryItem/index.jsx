import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CountryItem.module.css';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-right.svg';
import Feature from '../Feature';

function CountryItem({title, link, items}) {
  return (
    <>
      <Link
        className={styles.link}
        to={link}
      >
        <h2 className={styles.title}>
          {title}
          <Arrow />
        </h2>
      </Link>

      <Feature
        items={items}
      />
    </>
  );
}

CountryItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  items: PropTypes.array
};

CountryItem.defaultProps = {
  title: '',
  link: '',
  items: []
};

export default CountryItem;
