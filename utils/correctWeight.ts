import { SystemFontWeight } from '@/types';

export function correctWeight(weight: SystemFontWeight): number {
  return weight === 'bold'
    ? 700
    : weight === 'medium'
    ? 500
    : weight === 'normal'
    ? 400
    : 300;
}
