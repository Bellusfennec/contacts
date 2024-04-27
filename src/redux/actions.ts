import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const SET_CONTACT_ACTION = "SET_CONTACT_ACTION";
export const SET_GROUP_CONTACT_ACTION = "SET_GROUP_CONTACT_ACTION";
export const SET_FAVORITE_CONTACT_ACTION = "SET_FAVORITE_CONTACT_ACTION";

interface SetContactAction {
  type: typeof SET_CONTACT_ACTION;
  payload: {
    array: ContactDto[];
  };
}
interface SetGroupContactAction {
  type: typeof SET_GROUP_CONTACT_ACTION;
  payload: {
    array: GroupContactsDto[];
  };
}
interface SetFavoriteContactAction {
  type: typeof SET_FAVORITE_CONTACT_ACTION;
  payload: {
    array: FavoriteContactsDto;
  };
}

export function setContactActionCreator(array: ContactDto[]): SetContactAction {
  return { type: SET_CONTACT_ACTION, payload: { array } };
}
export function setGroupContactActionCreator(array: GroupContactsDto[]): SetGroupContactAction {
  return { type: SET_GROUP_CONTACT_ACTION, payload: { array } };
}
export function setFavoriteContactActionCreator(array: FavoriteContactsDto): SetFavoriteContactAction {
  return { type: SET_FAVORITE_CONTACT_ACTION, payload: { array } };
}

export type ProjectActions = SetContactAction | SetGroupContactAction | SetFavoriteContactAction;
