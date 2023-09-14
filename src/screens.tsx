import type { NavigatorScreenParams } from '@react-navigation/native';

import { MallPage } from './pages/mall';
import { MePage } from './pages/me';
import { ShelfPage } from './pages/shelf';

export type RootDrawerParamList = {
  Examples: undefined;
};

export type LinkComponentDemoParamList = {
  Article: { author: string };
  Albums: undefined;
};

export const SCREENS = {
  ShelfPage: {
    title: '书架',
    component: ShelfPage,
  },
  MallPage: {
    title: '书城',
    component: MallPage,
  },
  MePage: {
    title: '我的',
    component: MePage,
  },
};

type ParamListTypes = {
  Home: undefined;
  NotFound: undefined;
  LinkComponent: NavigatorScreenParams<LinkComponentDemoParamList> | undefined;
};

export type RootStackParamList = {
  [P in Exclude<keyof typeof SCREENS, keyof ParamListTypes>]: undefined;
} & ParamListTypes;

// Make the default RootParamList the same as the RootStackParamList
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
