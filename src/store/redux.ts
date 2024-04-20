import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { contactReducer } from "./contactReducer";
import { groupContactReducer } from "./groupContactReducer";
import { favoriteContactReducer } from "./favoriteContactReducer";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { logActionMiddleware } from "./logActionMiddleware";

const rootReducer = combineReducers({
  contacts: contactReducer,
  groupContacts: groupContactReducer,
  favoriteContacts: favoriteContactReducer,
});

// я не понимаю как это решить, можно уменьшить версию редакс и ошибка уходит, но появляется ошибки с другими зависимостями редакса
// @ts-ignore
export const store = createStore(rootReducer, composeWithDevToolsDevelopmentOnly(applyMiddleware(logActionMiddleware)));

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = useDispatch<any>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>;
