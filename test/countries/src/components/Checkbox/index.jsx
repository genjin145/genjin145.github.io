import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Off } from '../../assets/svg/checkbox-off.svg';
import { ReactComponent as On } from '../../assets/svg/checkbox-on.svg';
import classNames from 'classnames';
import styles from './Checkbox.module.css';

function Checkbox({checked, onChange, value, label, className}) {
  return (
    <label
      className={classNames([
        `${styles.wrapper}`,
        `${className}`
      ])}
    >
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className={styles.box}>
        {checked ? <On /> : <Off />}
      </span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
  value: '',
  label: '',
  className: ''
};

export default Checkbox;
