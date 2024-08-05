import React, { PropsWithChildren, useState } from 'react';
import Context from './context';
import { Quote } from '../lib/types';

const ContextProvider: React.FC<PropsWithChildren<{object: null}>> = ({ children }) => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [bgColor, setBgColor] = useState('#666');

    return (
        <Context.Provider value={{ quote, setQuote, bgColor, setBgColor }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
