import React, { useEffect, useState } from 'react';

import { Counter } from './Counter';
import { ForPeople } from './ForPeople';
import { ListLinks } from './ListLinks';
import { Search } from './Search';
import styles from './Main.module.scss';
import { useAppSelector } from 'lib';

interface MainProps {
  NotFound?: string;
}

export const Main: React.FC<MainProps> = ({ NotFound }) => {
  const { isMobile } = useAppSelector((state) => state.isMobile);

  return (
    <div className={styles.Page}>
      <div className={styles.Page__header}>
        <Counter />
        <Search />
        <ForPeople />
      </div>
      <div className={styles.List}>
        <ListLinks />
      </div>
    </div>
  );
};
