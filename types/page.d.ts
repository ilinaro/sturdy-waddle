import { NextPage } from 'next';
import React, { ComponentType, ReactElement, ReactNode } from 'react';

export type PageType<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
