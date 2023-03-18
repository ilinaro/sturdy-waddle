import {
  useAppDispatch,
  useAppSelector,
  useDeviceTypeIdentifier,
  useNoScroll,
  useUpScrollPage,
} from '@/lib';

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
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {isMobile !== undefined && (
        <>
          {isMobile ? (
            <>
              <main className={styles.MainMobile}>{children}</main>
              <Footer />
            </>
          ) : null}
        </>
      )}
    </>
  );
};
