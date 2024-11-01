import * as React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Root from './nav/root';

const App = () => {

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default registerRootComponent(App);
