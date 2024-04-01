import { ProjectActions, SET_CONTACT_ACTION } from "./actions";

const initialState = {
  entity: [],
};

export function contactReducer(state = initialState, action: ProjectActions) {
  switch (action.type) {
    case SET_CONTACT_ACTION:
      return {
        entity: action.payload.array,
      };

    default:
      break;
  }

  return state;
}
