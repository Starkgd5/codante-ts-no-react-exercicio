import { createContext, Dispatch, SetStateAction } from "react";
import { Quote } from "../lib/types";

interface InitialState {
    bgColor: string;
    quote: Quote | null;
    setBgColor: Dispatch<SetStateAction<string>>;
    setQuote: Dispatch<SetStateAction<Quote | null>>;
}

const INITIAL_STATE = {
    bgColor: '#666',
    quote: null,
    setBgColor: () => {},
    setQuote: () => {},
} as InitialState;

const Context = createContext<InitialState>(INITIAL_STATE);

export default Context;
