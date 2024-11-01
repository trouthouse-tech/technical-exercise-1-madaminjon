import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export enum ROOT_ROUTES {
  AUTH = 'AUTH',
  MAIN = 'MAIN',
}

export type RootStackParamList = {
  [ROOT_ROUTES.AUTH]: undefined;
  [ROOT_ROUTES.MAIN]: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList, ROOT_ROUTES.AUTH>;
export type RootNavigationRoute = RouteProp<RootStackParamList, ROOT_ROUTES.AUTH>;
