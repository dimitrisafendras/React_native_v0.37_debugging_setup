import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({name: 'Demo'}) // controls connection & communication settings
  .use(reactotronRedux()) //  <- here i am!
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

export default reactotron;
