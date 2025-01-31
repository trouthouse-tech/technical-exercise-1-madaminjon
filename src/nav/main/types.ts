import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export enum MAIN_ROUTES {
  LOGGEDIN = "LOGGEDIN",
}

export type MainStackParamList = {
  [MAIN_ROUTES.LOGGEDIN]: undefined;
};

export type MainNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  MAIN_ROUTES.LOGGEDIN
>;
export type MainNavigationRoute = RouteProp<
  MainStackParamList,
  MAIN_ROUTES.LOGGEDIN
>;
