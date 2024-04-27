import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { Action, combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { favoriteContactReducer } from "./favoriteContactReducer";
import { groupContactReducer } from "./groupContactReducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
  groupContacts: groupContactReducer,
  favoriteContacts: favoriteContactReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([]);
  },
});

export type RootState = ReturnType<typeof rootReducer>;

// Hooks for Redux
export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, Action>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>;
