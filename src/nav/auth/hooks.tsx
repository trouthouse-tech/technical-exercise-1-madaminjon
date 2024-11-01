import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from './types';

export const useAuthNavigation = () => {
  const nav = useNavigation<AuthNavigationProp>();

  return nav;
};
