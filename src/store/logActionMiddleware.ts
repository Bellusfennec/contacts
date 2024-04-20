import { Middleware } from "redux";
import { ProjectActions } from "./actions";
import { RootState } from "./redux";

// я не понимаю как это решить
// @ts-ignore
export const logActionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
  return function wrapDispatch(next) {
    return function handleAction(action: ProjectActions) {
      console.log(action.type);

      next(action);
    };
  };
};
