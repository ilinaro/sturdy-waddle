import {
  useAppDispatch,
  useAppSelector,
  useDeviceTypeIdentifier,
  useNoScroll,
  useUpScrollPage,
} from '@/lib';
import { useEffect, useState } from 'react';

import { Footer } from '@/components/Footer';
import Head from 'next/head';
import styles from './PrimaryLayout.module.scss';

export interface PrimaryLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({
  children,
  title,
}) => {
  useDeviceTypeIdentifier();
  const { isMobile } = useAppSelector((state) => state.isMobile);
  const { isLogin } = useAppSelector((state) => state.authState);
  const { noScroll } = useAppSelector((state) => state.noScroll);

  const pageTitle = `m.ff | ${title}`;

  useNoScroll(noScroll);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Вычисляем высоту видимой области браузера
    const windowHeight = window.innerHeight;
    // Вычитаем высоту верхней панели (если есть)
    const topBarHeight = window.visualViewport?.offsetTop ?? 0;
    // Вычитаем высоту нижней панели (если есть)
    const bottomBarHeight =
      windowHeight - document.documentElement.clientHeight;
    // Устанавливаем высоту элемента
    setHeight(windowHeight - topBarHeight - bottomBarHeight);
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {isMobile !== undefined && (
        <>
          {isMobile ? (
            <>
              <div style={{ height: `${height}px` }}>
                <main className={styles.MainMobile}>{children}</main>
                <Footer />
              </div>
              ;
            </>
          ) : null}
        </>
      )}
    </>
  );
};
