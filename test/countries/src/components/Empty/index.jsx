import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Empty.module.css';

function Empty({className}) {
  return (
    <div
      className={classNames([
        `${styles.wrapper}`,
        `${className}`
      ])}
    >
      <div className={styles.box}>
        <span className={styles.image}>¯\_(ツ)_/¯</span>
      </div>
    </div>
  );
}

Empty.propTypes = {
  className: PropTypes.string
};

Empty.defaultProps = {
  className: ''
};

export default Empty;
