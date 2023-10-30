import { StyleSheet, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
