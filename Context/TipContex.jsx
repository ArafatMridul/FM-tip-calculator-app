import { createContext, useContext, useReducer } from "react";

const TipContex = createContext();

const initialState = {
    billAmount: null,
    tipPercentage: null,
    customTip: null,
    numberOfPeople: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "setBill":
            return { ...state, billAmount: action.payload };

        case "setTipPercentage":
            return { ...state, tipPercentage: action.payload, customTip: null };

        case "setCustomTip":
            return { ...state, customTip: action.payload };

        case "setPeople":
            return { ...state, numberOfPeople: action.payload };

        case "reset":
            return initialState;

        default:
            throw new Error("Unkown Action.");
    }
}

function TipProvider({ children }) {
    const [{ billAmount, tipPercentage, customTip, numberOfPeople }, dispatch] =
        useReducer(reducer, initialState);

    return (
        <TipContex.Provider
            value={{
                billAmount,
                tipPercentage,
                customTip,
                numberOfPeople,
                dispatch,
            }}
        >
            {children}
        </TipContex.Provider>
    );
}

function useTip() {
    const context = useContext(TipContex);

    if (context === undefined)
        throw new Error("TipContext is used outside of TipProvider");

    return context;
}

export { TipProvider, useTip };
