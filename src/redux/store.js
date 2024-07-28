import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../redux/contacts/contactsSlice";
import filterReducer from "../redux/filter/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
