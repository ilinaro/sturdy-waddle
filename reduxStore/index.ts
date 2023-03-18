import authStateReducer from 'redux/authStateSlice';
import { configureStore } from '@reduxjs/toolkit';
import deviceTypeReducer from 'redux/deviceTypeSlice';
import noScrollSlice from 'redux/noScrollSlice';
import openAuthSlice from 'redux/openAuthForm';

const store = configureStore({
  reducer: {
    authState: authStateReducer,
    isMobile: deviceTypeReducer,
    openAuthModal: openAuthSlice,
    noScroll: noScrollSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
