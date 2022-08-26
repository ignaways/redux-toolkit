# redux-toolkit
simple setup Redux Toolkit in reactJs

&nbsp;
## set up index.js
+ **Folder** _.... / src / index.js_

  ``` jsx
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';
  import reportWebVitals from './reportWebVitals';
  /* <-- import store */
  import { store } from './redux/store'; 
  /* <-- import Provider*/
  import { Provider } from 'react-redux'; 

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode> 
      /* <-- set up provider, props store */
      <Provider store={store}> 
        <App />
      </Provider>
    </React.StrictMode>
  );

  reportWebVitals();
  ```

  &nbsp;
## create store.js
+ **Folder** _.... / src / redux / store.js_

  ``` jsx
  /* import configureStore */
  import {configureStore} from '@reduxjs/toolkit'; 
  /* import list feature you want to regist */
  import counterReducer from './features/counter'; 

  /* create store with configurationStore */
  export const store = configureStore({
     /* regist your feature in reducer */
    reducer: {
      counter: counterReducer,
    },
  });
  ```

   &nbsp;
## set up index.js
+ **Folder**  _.... / src / redux / features_

  ``` jsx
  /* import createSlice */
  import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    count: 0,
    num: 1
  }

  const counterSlice = createSlice({
    /* set name same when you regist in store */
    name: "counter",
    /* set your initialStage */
    initialState,
    /* set your action in reducer */
    reducers: {
      increment: (state) => {
        state.count += state?.num;
      },
      decrement: (state) => {
        state.count -= state?.num;
      },
      setNumber: (state, action) => {
        state.num = action.payload
      }
    },
  });

   /* export action, you can dispatch whenever you want */
  export const { increment, decrement, setNumber } = counterSlice.actions;
  /* export reducer to store, when it's regist in store u can get this state whenever you want */
  export default counterSlice.reducer;
  ```
  
  &nbsp;
## Usage
- **`npm install`**
- **`npm run start`**