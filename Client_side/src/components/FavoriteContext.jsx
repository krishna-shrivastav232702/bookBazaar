import React, { createContext, useContext, useReducer } from 'react';

const FavoritesStateContext = createContext();
const FavoritesDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            // Check if item already exists in favorites
            if (state.find(item => item.id === action.id)) {
                return state; // Item already in favorites, do nothing
            }
            // Add new item to favorites
            
            return [...state, { id: action.id, title: action.title, author: action.author,image:action.image }];
        case "REMOVE":
            return state.filter(item => item.id !== action.id);
        default:
            console.log("error in reducer");
            return state; // Return current state in case of an unrecognized action
    }
}

export const FavoritesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <FavoritesDispatchContext.Provider value={dispatch}>
            <FavoritesStateContext.Provider value={state}>
                {children}
            </FavoritesStateContext.Provider>
        </FavoritesDispatchContext.Provider>
    );
}

export const useFavorites = () => useContext(FavoritesStateContext);
export const useDispatchFavorites = () => useContext(FavoritesDispatchContext);
