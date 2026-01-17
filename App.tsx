/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import ProductList from 'src/features/productsList';
import { store } from 'src/store/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
}

function AppContent() {
  return (
    <>
      <ProductList />
    </>
  );
}

export default App;
