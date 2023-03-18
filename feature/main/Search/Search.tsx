import { ChangeEventHandler, useRef, useState } from 'react';
import { SearchSVG, TextField, Title } from '@/components';

import clsx from 'clsx';
import styles from './Search.module.scss';

export const Search = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<string | null>(null);
  const [focusOnSubmit, setFocusOnSubmit] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target;
    setData(value);
  };
  const handleClearSearch = () => {
    if (searchInput.current !== null) {
      searchInput.current.focus();
    }
    setData('');
  };

  return (
    <>
      <div className={styles.Title}>
        <Title>Поиск</Title>
      </div>
      <div className={styles.Container}>
        <div className={styles.Search}>
          <button className={styles.Search__button} type="submit">
            <SearchSVG color={'grey-light'} />
          </button>
          <TextField
            maxLength={190}
            ref={searchInput}
            name="search"
            placeholder="Поиск"
            onChange={handleChange}
            onFocus={() => {
              setFocusOnSubmit(true);
            }}
            onBlur={() => {
              setFocusOnSubmit(false);
            }}
            value={data ?? ''}
          ></TextField>
        </div>
      </div>
    </>
  );
};
