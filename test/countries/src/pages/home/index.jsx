import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import globalStyles from '../../Global.module.css';
import styles from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrent } from '../home/homePageSlice.js';

import CountryList from '../../components/CountryList';
import Pagination from '../../components/Pagination';
import Filter from '../../components/Filter';
import Loader from '../../components/Loader';
import Empty from '../../components/Empty';

function Home() {
  const [countries, setCountries] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [step] = useState(5);
  const filterSelector = useSelector(state => state.filter);
  const homePageSelector = useSelector(state => state.homePage);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoding(true);

    const filter = `filter: {
      code: {regex: "${filterSelector.search}"},
      currency: {regex: "${filterSelector.currency.join('|')}"},
      continent: {regex: "${filterSelector.continent}"}
    }`;
    const query = `
      {
        countries(${filter}) {
          code
          name
          capital
          currency
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
        setCountries(data.data.countries);
        setIsLoding(false);
      });
  }, [filterSelector]);

  let content;
  if (isLoding) {
    content = <Loader />;
  } else {
    if (countries.length) {
      content = (
        <>
          <CountryList
            countries={countries.slice(
              (homePageSelector.current - 1) * step,
              homePageSelector.current * step
            )}
          />
          <Pagination
            className={styles.home__pagination}
            current={homePageSelector.current}
            pages={Math.ceil(countries.length / step)}
            onClickPrev={(page) => dispatch(setCurrent(page))}
            onClickNext={(page) => dispatch(setCurrent(page))}
          />
        </>
      )
    } else {
      content = <Empty />;
    }
  }

  return (
    <>
      <div className={styles.home}>
        <div
          className={classNames([
            `${globalStyles.box}`,
            `${styles.home__left}`
          ])}
        >
          <header className={globalStyles.header}>
            <h1>Countries</h1>
          </header>

          <main className={styles.home__content}>
            {content}
          </main>
        </div>

        <aside className={styles.home__right}>
          <Filter
            onChange={() => dispatch(setCurrent(1))}
          />
        </aside>
      </div>
    </>
  );
}

export default Home;
