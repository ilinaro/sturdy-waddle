import { BodyBold } from '@/components/Fonts/BodyBold';
import FFimg from '@/images/ff_img.png';
import Image from 'next/legacy/image';
import { staticIMG } from '@/utils/imgStatic';
import styles from './Desktop.module.scss';
export const Desktop = () => {
  return (
    <div className={styles.Desktop}>
      <div className={styles.Content}>
        <div className={styles.ImageWrapper}>
          {!!FFimg && (
            <Image
              priority
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              loader={staticIMG}
              src={FFimg}
              layout="fill"
              alt={'ff'}
            />
          )}
        </div>
        <div>
          <BodyBold color="black">Mobile version</BodyBold>
        </div>
      </div>
    </div>
  );
};
