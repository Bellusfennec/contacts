import { ProjectActions, SET_FAVORITE_CONTACT_ACTION } from "./actions";

const initialState = {
  entity: [],
};

export function favoriteContactReducer(state = initialState, action: ProjectActions) {
  switch (action.type) {
    case SET_FAVORITE_CONTACT_ACTION:
      return {
        entity: action.payload.array,
      };

    default:
      break;
  }

  return state;
}
