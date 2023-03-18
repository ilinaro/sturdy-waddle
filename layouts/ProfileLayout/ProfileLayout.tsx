import { ReactNode, useEffect } from 'react';

// import { Subheader } from '@components';
import clsx from 'clsx';
import styles from './ProfileLayout.module.scss';
// import { scrollToUp } from '@utils';
import { useAppSelector } from 'lib';
import { useRouter } from 'next/router';

interface ProfileLayoutProps {
  children: ReactNode;
  active: number | null;
}

export const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  children,
  active,
}) => {
  const { pathname, push } = useRouter();
  const { isMobile } = useAppSelector((state) => state.isMobile);
  const { isLogin } = useAppSelector((state) => state.authState);

  useEffect(() => {
    if (!isLogin) push('/');
  }, [isLogin, push]);

  return <>{isLogin && <div className={styles.Profile}>{children}</div>}</>;
};
