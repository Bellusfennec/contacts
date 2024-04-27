import { ProjectActions, SET_GROUP_CONTACT_ACTION } from "./actions";

const initialState = {
  entity: [],
};

export function groupContactReducer(state = initialState, action: ProjectActions) {
  switch (action.type) {
    case SET_GROUP_CONTACT_ACTION:
      return {
        entity: action.payload.array,
      };
    default:
      break;
  }

  return state;
}
