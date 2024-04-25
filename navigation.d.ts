import { TypeRootStackParamList } from './app/components/Navigation/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TypeRootStackParamList {}
  }
}