import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { LargeButton } from './components';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <LargeButton title="This is Just a dummy Button" />
    </Provider>
  );
}

export default App;
