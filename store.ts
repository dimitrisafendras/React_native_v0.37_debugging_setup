import {configureStore} from '@reduxjs/toolkit';

import yourReducer from './yourFeatureSlice';
import Reactotron from 'reactotron-react-native';

const store = configureStore({
  reducer: {
    yourFeature: yourReducer,
  },
  // enhancers: __DEV__ ? [Reactotron.createEnhancer!()] : [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
