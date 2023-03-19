import { ToggleSwitch } from '@/components';
import styles from './ForPeople.module.scss';
import { useState } from 'react';

export const ForPeople = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const options = ['ДЛЯ НЕЕ', 'ДЛЯ НЕГО'];
  return (
    <div className={styles.ForPeople}>
      <div className={styles.ForPeople__container}>
        <ToggleSwitch
          options={options}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />
      </div>
    </div>
  );
};
