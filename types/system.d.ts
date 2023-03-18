export type SystemColor =
  | 'white'
  | 'black'
  | 'noactive'
  | 'grey'
  | 'grey-light'
  | 'silver'
  | 'blue-darken'
  | 'green'
  | 'default'
  | 'default-darken'
  | 'inherit'
  | 'blue-white'
  | 'black-light'
  | 'white-darken'
  | 'blue-darken';

export type SystemFontWeight = 'light' | 'normal' | 'medium' | 'bold';

export type SystemFonts =
  | 'bodyLihgt'
  | 'bodyNormal'
  | 'bodyBold'
  | 'subheader'
  | 'subtitle'
  | 'title';

export interface SystemTokens {
  access_token: string;
  refresh_token: string;
}
