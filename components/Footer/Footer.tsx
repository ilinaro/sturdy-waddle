import { LikeSVG, ProfileSVG, SearchListSVG } from '../SVG';

import { BodySmall } from '../Fonts';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <div>
          <SearchListSVG />
          <BodySmall color={'black'}>Поиск</BodySmall>
        </div>
        <div>
          <LikeSVG color={'noactive'} />
          <BodySmall color={'grey'}>Вишлист</BodySmall>
        </div>
        <div>
          <ProfileSVG color={'noactive'} />
          <BodySmall color={'grey'}>Профиль</BodySmall>
        </div>
      </div>
    </div>
  );
};
