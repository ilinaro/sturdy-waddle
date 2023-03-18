import { BodySmall, CartSVG } from '@/components';

import styles from './Counter.module.scss';

export const Counter = () => {
  return (
    <div className={styles.Head}>
      <div className={styles.Head__container}>
        <div className={styles.Counter}>
          <BodySmall color={'black'}>2</BodySmall>
          <CartSVG />
        </div>
      </div>
    </div>
  );
};
