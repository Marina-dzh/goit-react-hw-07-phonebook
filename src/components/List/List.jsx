import { Filter } from "../Filter/Filter"
import { List, Item, Number, Button } from "./List.styled"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter  } from "components/redux/selectors";
import { useEffect } from "react";
import { fetchContacts, deleteContact } from "components/redux/operations";

export const ContactList = ( ) => {
  
    const filterQ = useSelector(selectFilter);
    
    const dispatch = useDispatch();
    
   const { items, isLoading, error } = useSelector(selectContacts);
    // console.log(items, isLoading, error)
    
  useEffect(() => {
      dispatch(fetchContacts());
  }, [dispatch]);
    
    const visibleContacts = items.filter(contact => contact.name.toLowerCase().includes(filterQ.toLowerCase())
    );
   
    return (
        <div style={{position:"relative"}}>
            <Filter />
            {isLoading && <PulseLoader
  color="black"
                cssOverride={{
                    position: "absolute",
                    left:"45%"
                    
                }}
  margin={2}
  size={6}
  speedMultiplier={2}
/>}
            <List >
                
      {error && <b>{error}</b>}
            {visibleContacts.map(contact => (
                <ContactItem key={contact.id} contact={contact}  />
    
            ))}
                 
                {(!visibleContacts.length && filterQ.length!==0) && <p style={{ fontSize: 14, }}>There is no result</p>}
                 {(!visibleContacts.length && !filterQ.length && !isLoading) && <p style={{ fontSize:14  }}>The PhoneBook is empty!</p>}
        
        </List></div>
    )
}

const ContactItem = ({ contact:{name, number, id}}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
    return (
        <Item>
            <div>
                <div>{name}</div>
                <Number>{number}</Number>
            </div>
            <Button type="button" onClick={handleDelete} >Delete</Button>
        </Item>
        
    )
   
}

ContactItem.propTypes = {
    contact: PropTypes.exact({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string
    }),
    deleteContact:PropTypes.func,
    
}
 Filter.propTypes = {
     changeFilter: PropTypes.func,
     filter: PropTypes.string
    
}