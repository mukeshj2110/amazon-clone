import React ,{createContext , useContext ,useReducer } from 'react'


// it prepares the data layer
export const StateContext = createContext();

// wrap our app and provide the data layer
export const StateProvider = ({ reducer , initialState , children }) =>{
    const temp = useReducer(reducer , initialState)
    return(
        
<StateContext.Provider value={temp}>
    {children}
</StateContext.Provider>
    )
}
//it pulls the information from data layer
export const useStateValue = () => useContext(StateContext); 