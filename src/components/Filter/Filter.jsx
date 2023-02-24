
import { Input, Text } from "./Filter.styled"
import { setStatusFilter } from "../redux/filterSlice"

import { useDispatch } from "react-redux";
 
export const Filter = () => {
    
    const dispatch = useDispatch();
    const changeFilter = (e) => {
        e.preventDefault();
    //   console.log(e.currentTarget.value)
    dispatch(setStatusFilter(e.currentTarget.value))
   }

  
 
    return (
       <>
            <Text>Find contacts by name</Text>
            <Input type="text" onChange={ changeFilter} />
            
        </>     
    )
}
