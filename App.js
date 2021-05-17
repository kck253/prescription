import React, {useState, useEffect} from 'react';
import { View, Image } from 'react-native';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

export default function App() {
  const initialState = {
    theme: 'dark'
  }

  function reducer(state = initialState, action){
    switch(action.type){
      case "CHANGE_THEME":
        return {...state, theme:action.data};
      default:
        return state;
    }
  }

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <View style={{flex:1}}> 
        <Navigation/>
      </View>
    </Provider>
  );
}
