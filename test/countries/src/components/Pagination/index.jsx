import React from 'react';
import PropsType  from 'prop-types';
import classNames from 'classnames';
import styles from './Pagination.module.css';
import { ReactComponent as Prev } from '../../assets/svg/prev.svg';
import { ReactComponent as Next } from '../../assets/svg/next.svg';

function Pagination({current, pages, onClickPrev, onClickNext, className}) {
  if (Number(pages) <= 1) return null;

  return (
    <div
      className={classNames([
        `${styles.wrapper}`,
        `${className}`
      ])}
    >
      <button
        className={styles.button}
        onClick={() => onClickPrev(current - 1)}
        disabled={Number(current) === 1}
      >
        <Prev />
      </button>
      <span
        className={styles.value}
      >
          <b>{current}</b>&nbsp;of {pages}
        </span>
      <button
        className={styles.button}
        onClick={() => onClickNext(current + 1)}
        disabled={Number(current) === Number(pages)}
      >
        <Next />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  current: PropsType.oneOfType([
    PropsType.number,
    PropsType.string
  ]),
  pages: PropsType.oneOfType([
    PropsType.number,
    PropsType.string
  ]),
  onClickPrev: PropsType.func,
  onClickNext: PropsType.func,
  className: PropsType.string
};

Pagination.defaultProps = {
  current: 1,
  pages: 1,
  onClickPrev: () => {},
  onClickNext: () => {},
  className: ''
};

export default Pagination;
