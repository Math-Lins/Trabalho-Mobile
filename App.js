import { StatusBar } from 'expo-status-bar';
// import { Home } from './src/screens/home';
import { Login } from './src/screens/sign';

export default function App() {
  return (
    <>
      {/* <Home /> */}
      <Login />
      <StatusBar style='auto' />
    </>
  );
}
