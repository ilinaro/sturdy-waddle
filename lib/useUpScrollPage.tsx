import { useEffect, useState } from 'react';

export const useUpScrollPage = () => {
  const [activeScroll, setActiveScroll] = useState<boolean>(false);
  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      setActiveScroll(window.scrollY > html.clientHeight);
      window.addEventListener('scroll', () => {
        setActiveScroll(window.scrollY > html.clientHeight);
      });
      window.addEventListener('resize', () => {
        setActiveScroll(window.scrollY > html.clientHeight);
        window.addEventListener('scroll', () => {
          setActiveScroll(window.scrollY > html.clientHeight);
        });
      });
    }
  }, []);

  return activeScroll;
};
