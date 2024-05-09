import { useEffect, useState } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Footer } from '../Footer';
import { Home } from '../../screen/Home';
import { Auth } from '../../screen/Auth';
import { useAuth } from '../../hooks/useAuth';
import { Chains, ChainsFilters, Income, Profile, Rates, Settings, TransactionHistory, UpdatePassword } from '../../screen';

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
    {
      key: 2,
      name: 'Chains',
      component: Chains,
    },
    {
      key: 3,
      name: 'Income',
      component: Income,
    },
    {
      key: 4,
      name: 'Profile',
      component: Profile,
    },
    {
      key: 5,
      name: 'ChainsFilters',
      component: ChainsFilters,
    },
    {
      key: 6,
      name: 'TransactionHistory',
      component: TransactionHistory,
    },
    {
      key: 7,
      name: 'Rates',
      component: Rates,
    },
    {
      key: 8,
      name: 'Settings',
      component: Settings,
    },
    {
      key: 9,
      name: 'UpdatePassword',
      component: UpdatePassword,
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
