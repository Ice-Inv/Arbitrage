import { useEffect, useState } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Footer } from '../Footer';
import { Home } from '../../screen/Home';
import { Auth } from '../../screen/Auth';
import { useAuth } from '../../hooks/useAuth';

const Stack = createNativeStackNavigator();

function Navigation() {
  const { user } = useAuth();
  const ref = useNavigationContainerRef();

  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const listener = ref.addListener('state', () => setName(ref.getCurrentRoute()?.name));

    return () => {
      ref.removeListener('state', listener);
    }
  }, []);

  const screensData = [
    {
      key: 1,
      name: 'Home',
      component: Home,
    },
  ];

  return (
    <>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {user
            ? (
              <>
                {screensData.map((screenData) => (
                  <Stack.Screen { ...screenData}/>
                ))}
              </>
            )
            : <Stack.Screen name="Auth" component={Auth}/>}
        </Stack.Navigator>
      </NavigationContainer>
      {user && name && <Footer navigate={ref.navigate} currentRoute={name}/>}
    </>
  )
}

export default Navigation;
