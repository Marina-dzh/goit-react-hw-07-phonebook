
import React from "react";
import { ContactForm } from "../Form/Form";
import { ContactList } from "../List/List";
import { Container } from "./App.styled";
import { Toaster } from 'react-hot-toast';



export const App = () => {

   

    return (
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList />
        <Toaster  toastOptions={{duration: 2000} }/>
      </Container >
      
    )

}
