import React from 'react';
import PropTypes from 'prop-types';
import styles from './CountryList.module.css';

import CountryItem from '../CountryItem';

function CountryList({countries}) {
  return (
    <ul className={styles.list}>
      {countries.map(country => (
        <li
          className={styles.item}
          key={country.code}
        >
          <CountryItem
            title={country.name}
            link={`/country/${country.code}`}
            items={[
              {title: 'Capital', text: country.capital},
              {title: 'Currency', text: country.currency}
            ]}
          />
        </li>
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  countries: PropTypes.array.isRequired
};

export default CountryList;
