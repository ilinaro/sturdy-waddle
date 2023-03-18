import { SVGType } from '@/types';
import { useGetCSSVars } from '@/lib';

export const ArrowSVG: React.FC<SVGType> = ({ width = 8, color = 'black' }) => {
  const currentColor = useGetCSSVars('color', color);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}px`}
      height={`${width * 1.2}px`}
      viewBox="0 0 8 13"
      fill="none"
    >
      <path d="M8 6.5L0 0V2.5L5 6.5H8Z" fill={currentColor} />
      <path d="M8 6.5L0 13V10.5L5 6.5H8Z" fill={currentColor} />
    </svg>
  );
};
