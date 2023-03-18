import { FontProps } from '@/types';
import clsx from 'clsx';
import { correctWeight } from '@/utils';
import styles from './BodySmall.module.scss';
import { useGetCSSVars } from '@/lib';

export const BodySmall: React.FC<FontProps> = ({
  children,
  className,
  color = 'inherit',
  weight = 'normal',
  sx,
  ...props
}) => {
  const currentColor = useGetCSSVars('color', color);
  const currentWeight = correctWeight(weight);
  return (
    <span
      style={{ color: currentColor, fontWeight: currentWeight, ...sx }}
      className={clsx(styles.BodySmall, className)}
      {...props}
    >
      {children}
    </span>
  );
};
