import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";



export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) =>{
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload)
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
        state.items = state.items.filter(contact => contact.id !== action.payload.id) 
      })
    .addMatcher(isAnyOf(fetchContacts.pending,addContact.pending,deleteContact.pending), (state) => {
      state.isLoading = true;
    })
    .addMatcher(isAnyOf(fetchContacts.rejected,addContact.rejected,deleteContact.rejected), (state, action) =>{
      state.isLoading = false;
      state.error = action.payload;
    })
  
  }

})




export const contactReducer = contactsSlice.reducer
