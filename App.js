import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';


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
