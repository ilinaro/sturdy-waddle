import { Main } from 'feature';
import { PageType } from '@/types';
import { PrimaryLayout } from 'layouts';
import React from 'react';

const IndexHome: PageType = () => <Main />;

IndexHome.getLayout = (page) => (
  <PrimaryLayout title="Главная">{page}</PrimaryLayout>
);

export default IndexHome;
