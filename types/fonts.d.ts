import { CSSProperties, HTMLAttributes } from 'react';
import { SystemColor, SystemFontWeight } from './system';

export type FontProps = JSX.IntrinsicElements['span'] & {
  className?: string;
  weight?: SystemFontWeight;
  color?: SystemColor;
  children?: React.ReactNode;
  sx?: CSSProperties;
};
