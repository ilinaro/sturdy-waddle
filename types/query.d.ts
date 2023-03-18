export type InfiniteQueryPropsType = {
  page?: number;
  itemNum?: number;
  queryKey?: string;
  enabled?: boolean | undefined;
  params?: {
    category?: number;
    max_price?: number;
    min_price?: number;
    shop?: number;
    title?: string;
    search?: string;
    ordering?: string | string[] | undefined;
    is_active?: boolean;
  };
};

export type GetQueryPropsType = QueryPropsType & {
  id: number | undefined;
};

export type GetTipsQueryPropsType = {
  query?: string;
  queryKey?: string;
};

export type PatchQueryPropsType<T = { [key: string]: any }> = {
  userData?: T;
};

export type deleteSelectedFromCartMutationPropsType = number[];

export type CartChargerQueryPropsType = {
  offers_id: number;
  id: number;
};
export type CartCountChargerQueryPropsType = CartChargerQueryPropsType & {
  count: number;
};

export type QueryPropsType = {
  isLogin?: boolean;
  queryKey?: string;
  enabled?: boolean;
  params?: any;
};

export type QueryBannersPropsType = {
  isLogin?: boolean;
  queryKey?: string;
  enabled?: boolean;
  type?: string | null;
};

export type AuthQueryProps = {
  phone_number: string;
};

export type LoginQueryProps = AuthQueryProps & {
  code: string;
};

export type LoginModalType =
  | 'phone'
  | 'login'
  | 'registration'
  | 'loading'
  | 'incomplete-registration';
