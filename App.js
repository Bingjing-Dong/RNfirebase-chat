import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticatedUserProvider } from './navigation/AuthenticatedUserProvider';
import RootNavigator from './navigation/RootNavigator';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
