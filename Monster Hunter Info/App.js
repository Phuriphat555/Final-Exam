import WeaponListScreen from './screens/WeaponListScreen';
import ArmorListScreen from './screens/ArmorListScreen';
import WeaponDetailScreen from './screens/WeaponDetailScreen';
import ArmorDetailScreen from './screens/ArmorDetailScreen';

<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="MonsterList" component={MonsterListScreen} />
  <Stack.Screen name="WeaponList" component={WeaponListScreen} />
  <Stack.Screen name="ArmorList" component={ArmorListScreen} />
  <Stack.Screen name="MonsterDetail" component={MonsterDetailScreen} />
  <Stack.Screen name="WeaponDetail" component={WeaponDetailScreen} />
  <Stack.Screen name="ArmorDetail" component={ArmorDetailScreen} />
</Stack.Navigator>
