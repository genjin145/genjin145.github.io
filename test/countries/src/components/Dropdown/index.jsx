import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Dropdown.module.css';

import Checkbox from '../Checkbox';

function Dropdown({label, items, values, onChange, className}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.addEventListener('click', close);
    return () => {
      document.removeEventListener('click', close);
    }
  }, []);

  function handleChange(currentValue) {
    if (values.includes(currentValue)) {
      onChange(values.filter(value => value !== currentValue));
    } else {
      onChange(values.concat(currentValue));
    }
  }

  function close(evt) {
    if (evt.target.closest('[data-dropdown]') === null) {
      setIsActive(false);
    }
  }

  const listItems = (
    <ul
      className={classNames([
        `${styles.list}`
      ])}
    >
      {items.map(item => (
        <li
          className={styles.item}
          key={item.value}
        >
          <Checkbox
            checked={values.includes(item.value)}
            onChange={handleChange}
            value={item.value}
            label={item.label}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={classNames([
        `${styles.wrapper}`,
        `${className}`
      ])}
      data-dropdown=""
    >
      <button
        className={classNames(
          `${styles.button}`,
          {[styles.active]: values.length}
        )}
        onClick={() => setIsActive(prev => !prev)}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{values.join(', ')}</span>
      </button>

      {isActive ? listItems : null}
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  values: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  label: '',
  items: [],
  values: [],
  onChange: () => {},
  className: ''
};

export default Dropdown;
