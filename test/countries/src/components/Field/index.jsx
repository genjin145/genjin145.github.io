import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Field.module.css';

function Field({title, text, className}) {
  return (
    <div
      className={classNames([
        `${styles.wrapper}`,
        `${className}`
      ])}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
}

Field.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
};

Field.defaultProps = {
  title: '',
  text: '',
  className: ''
};

export default Field;
