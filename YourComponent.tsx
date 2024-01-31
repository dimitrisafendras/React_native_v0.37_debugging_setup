import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './yourFeatureSlice';
import {RootState} from './store';
import {Button, Text, View} from 'react-native';

const YourComponent: React.FC = () => {
  const count = useSelector((state: RootState) => state.yourFeature.value);
  const dispatch = useDispatch();

  return (
    <View style={{marginTop: 100}}>
      <Text>Count: {count}</Text>
      <Button onPress={() => dispatch(increment())} title={'Increment'} />
    </View>
  );
};

export default YourComponent;
