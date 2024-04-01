import { Middleware } from "redux";
import { ProjectActions } from "./actions";
import { RootState } from "./redux";

// @ts-ignore
export const logActionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
  return function wrapDispatch(next) {
    return function handleAction(action: ProjectActions) {
      console.log(action.type);

      next(action);
    };
  };
};
