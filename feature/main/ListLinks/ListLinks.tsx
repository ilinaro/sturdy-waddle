import { ArrowSVG, BodyNormal } from '@/components';

import styles from './ListLinks.module.scss';

export const ListLinks = () => {
  return (
    <div className={styles.Wrapper}>
      {list.map((item) => (
        <div key={item.id} className={styles.ListList}>
          <div className={styles.ListList__tilte}>
            <BodyNormal>{item.title}</BodyNormal>
            <ArrowSVG />
          </div>
          <div className={styles.Line}></div>
        </div>
      ))}
    </div>
  );
};

type listT = {
  id: string;
  title: string;
}[];

const list: listT = [
  {
    id: '2',
    title: 'Распродажа',
  },
  {
    id: '3',
    title: 'Одежда',
  },
  {
    id: '4',
    title: 'Обувь',
  },
  {
    id: '5',
    title: 'Сумки',
  },
  {
    id: '6',
    title: 'Аксессуары',
  },
  {
    id: '7',
    title: 'Premium',
  },
  {
    id: '8',
    title: 'Спорт',
  },
  {
    id: '9',
    title: 'Красота',
  },
  {
    id: '10',
    title: 'Дом',
  },
  {
    id: '11',
    title: 'Resale',
  },
  {
    id: '12',
    title: 'Бренды',
  },
  {
    id: '13',
    title: 'Распродажа',
  },
  {
    id: '14',
    title: 'Дом',
  },
  {
    id: '15',
    title: 'Resale',
  },
  {
    id: '16',
    title: 'Бренды',
  },
  // {
  //   id: '17',
  //   title: 'Распродажа',
  // },
  // {
  //   id: '18',
  //   title: 'Распродажа',
  // },
  // {
  //   id: '18',
  //   title: 'Распродажа',
  // },
  // {
  //   id: '19',
  //   title: 'Распродажа',
  // },
  // {
  //   id: '20',
  //   title: 'Распродажа',
  // },
];
