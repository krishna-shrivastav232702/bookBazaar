import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            // Check if item already exists in cart
            const existingItem = state.find(item => item.id === action.id);
            if (existingItem) {
                // If it exists, update the quantity
                return state.map(item =>
                    item.id === action.id
                        ? { ...item, qty: item.qty + action.qty }
                        : item
                );
            }
            // If it doesn't exist, add a new item
            return [...state, {
                id: action.id,
                title: action.title,
                price: action.price,
                qty: action.qty,
                image: action.image
            }];
        case "REMOVE":
            return state.filter(item => item.id !== action.id);
        default:
            console.log("error in reducer");
            return state; // Return current state in case of an unrecognized action
    }
}


export const CartProvider = ({children})=>{
   
    const [state,dispatch] = useReducer(reducer,[])
    
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart =()=>useContext(CartStateContext);
export const useDispatchCart =()=>useContext(CartDispatchContext);