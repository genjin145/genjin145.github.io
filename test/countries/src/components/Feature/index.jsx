import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Feature.module.css';

function Feature({items, className}) {
  return (
    <ul
      className={classNames([
        `${styles.list}`,
        `${className}`
      ])}
    >
      {items.map((item, index) => (
        <li
          className={styles.item}
          key={index}
        >
          <span>{item.title}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

Feature.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  })),
  className: PropTypes.string
};

Feature.defaultProps = {
  items: [],
  className: ''
};

export default Feature;
