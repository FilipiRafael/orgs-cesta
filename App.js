import { StatusBar, SafeAreaView } from 'react-native';
import AppLoading from "expo-app-loading";
import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import { Cesta } from './src/screens/Cesta';
import mock from "./src/mocks/cesta";

export default function App() {
  const [fontLoaded] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

