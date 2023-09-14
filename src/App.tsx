// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// import { RootStackParamList, SCREENS } from './screens';

// const Tab = createBottomTabNavigator<RootStackParamList>();
// const SCREEN_NAMES = Object.keys(SCREENS) as (keyof typeof SCREENS)[];

// function App(): JSX.Element {
//   return (
//     <NavigationContainer>
//       {/* <StatusBar barStyle={color === 'light' ? 'light-content' : 'dark-content'} backgroundColor="#ccc" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={{ backgroundColor: DefaultTheme.colors.background }}
//         > */}
//       <Tab.Navigator initialRouteName="ShelfPage">
//         {SCREEN_NAMES.map(name => (
//           <Tab.Screen
//             key={name}
//             name={name}
//             getComponent={() => SCREENS[name].component}
//             options={{ title: SCREENS[name].title }}
//           />
//         ))}
//       </Tab.Navigator>
//       {/* </ScrollView>
//       </SafeAreaView> */}
//     </NavigationContainer>
//   );
// }

// export default App;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { RootStackParamList, SCREENS } from './screens';

const Tab = createBottomTabNavigator<RootStackParamList>();
const SCREEN_NAMES = Object.keys(SCREENS) as (keyof typeof SCREENS)[];

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ShelfPage"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ShelfPage') {
              iconName = focused ? 'book-open-variant' : 'book-open-variant';
            } else if (route.name === 'MallPage') {
              iconName = focused ? 'book-variant' : 'book-variant';
            } else if (route.name === 'MePage') {
              iconName = focused ? 'account' : 'account';
            } else {
              iconName = '';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        {SCREEN_NAMES.map(name => (
          <Tab.Screen
            key={name}
            name={name}
            getComponent={() => SCREENS[name].component}
            options={{ title: SCREENS[name].title }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
