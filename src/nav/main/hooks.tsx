import { useNavigation } from "@react-navigation/native";
import { MainNavigationProp } from "./types";

export const useMainNavigation = () => {
  const nav = useNavigation<MainNavigationProp>();

  return nav;
};
