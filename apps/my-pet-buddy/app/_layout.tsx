import { Drawer } from 'expo-router/drawer';
import { NativeBaseProvider, Box } from 'native-base';

export default function Layout() {
  return (
    <NativeBaseProvider>
      <Drawer
        screenOptions={{
          title: 'My Pet Buddy',
        }}
      >
        <Drawer.Screen name="index" />
        <Drawer.Screen name="settings/index" />
      </Drawer>
    </NativeBaseProvider>
  );
}
