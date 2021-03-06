import { resolveContacts } from "../utils/mockAPI";

export const fetchContacts = () => async dispatch => {
  dispatch({ type: "FETCH_CONTACTS_FETCHING" });

  try {
    const contacts = await resolveContacts();
    dispatch({ type: "FETCH_CONTACTS_COMPLETE", data: contacts.data });
  } catch (err) {
    dispatch({ type: "FETCH_CONTACTS_FAILED" });
  }
};

export const addFavorite = (id) => ({
  type: 'ADD_FAVORITE',
  id,
});

export const removeFavorite = (id) => ({
  type: 'REMOVE_FAVORITE',
  id,
});
