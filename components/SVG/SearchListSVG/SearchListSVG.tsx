import { SVGType } from '@/types';
import { useGetCSSVars } from '@/lib';

export const SearchListSVG: React.FC<SVGType> = ({
  width = 8,
  color = 'black',
}) => {
  const currentColor = useGetCSSVars('color', color);
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3076 10.7992L20 14.4754L18.4895 16L14.6292 12.136C13.6853 12.658 12.5943 12.9508 11.4611 12.9508C7.87336 12.9508 4.957 10.0473 4.957 6.47539C4.957 2.9035 7.87336 0 11.4611 0C15.0488 0 17.9859 2.9035 17.9859 6.47539C17.9859 8.14638 17.3354 9.67098 16.3076 10.7992ZM7.11876 6.47539C7.11876 8.8776 9.04889 10.7992 11.4617 10.7992C13.8746 10.7992 15.8047 8.8776 15.8047 6.47539C15.8047 4.07319 13.8746 2.15156 11.4617 2.15156C9.04889 2.15156 7.11876 4.07319 7.11876 6.47539Z"
        fill={currentColor}
      />
      <path d="M0 1.4189H4.95768V3.06418H0V1.4189Z" fill={currentColor} />
      <path d="M0 6.35473H3.30512V8.00001H0V6.35473Z" fill={currentColor} />
      <path d="M0 11.2906H4.95768V12.9358H0V11.2906Z" fill={currentColor} />
    </svg>
  );
};
