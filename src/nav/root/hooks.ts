import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from './types';

export const useRootNavigation = () => {
  const nav = useNavigation<RootNavigationProp>();

  return nav;
};
