import { BodyBold } from '@/components/Fonts/BodyBold';
import { BodyNormal } from '@/components';
import styles from './ForPeople.module.scss';

export const ForPeople = () => {
  return (
    <div className={styles.ForPeople}>
      <div className={styles.ForPeople__container}>
        <div>
          <BodyBold>ДЛЯ НЕЕ</BodyBold>
          <div className={styles.Bottom}></div>
        </div>

        <div className={styles.NoChoice}>
          <BodyNormal>ДЛЯ НЕГО</BodyNormal>
        </div>
      </div>
    </div>
  );
};
