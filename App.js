import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import  { AppLoading } from 'expo-app-loading'
import { useFonts ,Anton_400Regular } from '@expo-google-fonts/anton' 

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true}/>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
