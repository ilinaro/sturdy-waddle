import { SVGType } from '@/types';
import { useGetCSSVars } from '@/lib';

export const CartSVG: React.FC<SVGType> = ({ width = 20, color = 'black' }) => {
  const currentColor = useGetCSSVars('color', color);
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 20V6H15C15 4 14 0 10 0C6 0 5 4 5 6H4C1.79086 6 0 7.79086 0 10V20H10H20ZM13 6C13 2.8 11 2 10 2C9 2 7 2.8 7 6H10H13ZM13 8H10H7V11H5V8H4C2.89543 8 2 8.89543 2 10V18H10H18V8H15V11H13V8Z"
        fill={currentColor}
      />
    </svg>
  );
};
