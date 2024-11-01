import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export enum AUTH_ROUTES {
  WELCOME = 'WELCOME',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
}

export type AuthStackParamList = {
  [AUTH_ROUTES.WELCOME]: undefined;
  [AUTH_ROUTES.LOGIN]: undefined;
  [AUTH_ROUTES.SIGNUP]: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList, AUTH_ROUTES.WELCOME>;
export type AuthNavigationRoute = RouteProp<AuthStackParamList, AUTH_ROUTES.WELCOME>;
