import {configureStore, StoreEnhancer} from '@reduxjs/toolkit';

import yourReducer from './yourFeatureSlice';
import Reactotron from './ReactotronConfig';

let myEnhancer: StoreEnhancer | undefined;

if (__DEV__) {
  myEnhancer = Reactotron.createEnhancer();
}

const store = configureStore({
  reducer: {
    yourFeature: yourReducer,
  },
  enhancers: getDefaultEnhancers => {
    return myEnhancer
      ? getDefaultEnhancers().concat(myEnhancer)
      : getDefaultEnhancers();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
