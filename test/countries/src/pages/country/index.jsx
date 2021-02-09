import React, { useState, useEffect } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import globalStyles from '../../Global.module.css';
import styles from './Country.module.css';
import classNames from 'classnames';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-left.svg';

import Feature from '../../components/Feature';
import Field from '../../components/Field';
import Loader from '../../components/Loader';

function Country() {
  const [country, setCountry] = useState({});
  const [isLoding, setIsLoding] = useState(false);
  const { code }  = useParams();

  useEffect(() => {
    setIsLoding(true);

    const query = `
      {
        country(code: "${code}") {
          code
          name
          native
          phone
          continent {name}
          capital
          currency
          languages {name}
          states {name}
        }
      }`;

    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({query})
    })
      .then(response => response.json())
      .then(data => {
        setCountry(data.data.country);
        setIsLoding(false);
      });
  }, [code]);

  function toStringNameField(arr) {
    return arr ? arr.map(item => item.name).join(', ') : '';
  }

  if (isLoding) return <Loader className={styles.loader} />;
  if (!country) return <Redirect to="/" />;
  if (!country?.code) return null;

  let states;
  if (country.states?.length) {
    states = (
      <Field
        title="States"
        text={toStringNameField(country.states)}
      />
    );
  }

  return (
    <div className={globalStyles.box}>
      <header className={globalStyles.header}>
        <Link
          className={classNames([
            globalStyles.link,
            globalStyles.header_link
          ])}
          to="/"
        >
          <Arrow />
          Вернуться
        </Link>
        <h1 className={globalStyles.header_title}>{country.name}</h1>
      </header>

      <main>
        <Feature
          className={styles.feature}
          items={[
            {title: 'Continent', text: country.continent?.name},
            {title: 'Capital', text: country.capital},
            {title: 'Currency', text: country.currency},
            {title: 'Languages', text: toStringNameField(country.languages)},
            {title: 'Native name', text: country.native},
            {title: 'Phone', text: country.phone}
          ]}
        />

        {states}
      </main>
    </div>
  );
}

export default Country;
