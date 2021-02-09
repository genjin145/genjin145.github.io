import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Loader.module.css';

function Loader({className}) {
  return (
    <div
      className={classNames([
        `${styles.wrapper}`,
        `${className}`
      ])}
    >
      <div
        className={styles.circle}
      />
    </div>
  );
}

Loader.propTypes = {
  className: PropTypes.string
};

Loader.defaultProps = {
  className: ''
};

export default Loader;
