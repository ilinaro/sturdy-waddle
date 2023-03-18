import React, { WheelEventHandler } from 'react';

import clsx from 'clsx';
import styles from './TextField.module.scss';

type AllTypeElement = React.InputHTMLAttributes<HTMLInputElement>;

interface TextFieldProps extends AllTypeElement {
  label?: string;
  name: string;
  alignText?: 'left' | 'right' | 'center';
  className?: string;
  dimensions?: 'small' | 'medium' | 'large';
  type?: typesForTextField;
  inputClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  color?: string;
  errorMessage?: string;
  isError?: boolean;
  focus?: boolean;
  border?: boolean;
  textarea?: boolean;
  typeColor?: string;
}

type typesForTextField =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export const TextField = React.forwardRef(
  (
    {
      typeColor = '',
      textarea = false,
      className = '',
      inputClassName = '',
      iconClassName = '',
      labelClassName = '',
      type = 'text',
      alignText = 'left',
      name,
      maxLength = 60,
      dimensions = 'medium',
      onWheel,
      label,
      errorMessage = undefined,
      isError = false,
      children,
      color,
      focus = false,
      border = true,
      ...props
    }: React.PropsWithoutRef<TextFieldProps>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const noScrollForNumberType:
      | WheelEventHandler<HTMLInputElement>
      | undefined = (event) => {
      if (type === 'number') {
        event.currentTarget.blur();
      } else {
        onWheel;
      }
    };
    // DetailedHTMLProps < TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement > "
    return (
      <div
        className={clsx(
          styles.TextField,
          !!color && styles[`TextField_${color}`],
          !!isError && styles.TextField_error,
          className
        )}
      >
        {label && (
          <label
            className={clsx(styles.TextField__label, labelClassName)}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <input
          maxLength={maxLength}
          autoComplete="off"
          name={name}
          onWheel={noScrollForNumberType}
          style={{ textAlign: alignText }}
          className={clsx(
            styles.TextField__input,
            inputClassName,
            focus && styles.TextField__focus,
            border && styles.TextField__border,
            typeColor && styles[`TextField__${typeColor}`]
          )}
          type={type}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <span className={styles.TextField__error}>{errorMessage}</span>
        )}
        <div
          className={clsx(
            iconClassName ? iconClassName : styles.TextField__icon
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

TextField.displayName = 'TextField';
