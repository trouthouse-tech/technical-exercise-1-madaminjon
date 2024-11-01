import { ThunkAction, Action as ReduxAction } from '@reduxjs/toolkit';
import { store } from './store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R> = ThunkAction<R, RootState, unknown, ReduxAction<any>>;
