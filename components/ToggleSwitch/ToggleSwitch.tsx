import { BodyBold, BodyNormal } from '../Fonts';

import React from 'react';
import styles from './ToggleSwitch.module.scss';

type ToggleSwitchProps = {
  options: string[];
  selectedOption: number;
  onChange: (optionIndex: number) => void;
};

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  const handleOptionClick = (optionIndex: number) => {
    if (selectedOption !== optionIndex) {
      onChange(optionIndex);
    }
  };

  const getOptionClasses = (optionIndex: number) => {
    const baseClasses = styles.toggle_switch__option;
    const selectedClasses =
      selectedOption === optionIndex
        ? styles.toggle_switch__option__selected
        : '';
    return `${baseClasses} ${selectedClasses}`;
  };

  const sliderStyle = {
    left: `calc(${selectedOption} * (100% / ${options.length}))`,
    width: `calc(100% / ${options.length})`,
  };

  return (
    <div className={styles.toggle_switch}>
      {options.map((option, index) => (
        <div
          key={index}
          className={getOptionClasses(index)}
          onClick={() => handleOptionClick(index)}
        >
          {selectedOption === index ? (
            <BodyBold>{option}</BodyBold>
          ) : (
            <BodyNormal>{option}</BodyNormal>
          )}
        </div>
      ))}

      <div className={styles.toggle_switch__slider} style={sliderStyle} />
    </div>
  );
};
