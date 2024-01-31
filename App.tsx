import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import YourAppComponent from './YourComponent';

console.log('App.tsx');
const App = () => (
  <Provider store={store}>
    <YourAppComponent />
  </Provider>
);

export default App;
