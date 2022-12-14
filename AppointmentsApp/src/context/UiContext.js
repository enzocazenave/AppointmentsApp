import { createContext, useState } from 'react';

export const UiContext = createContext({});

export const UiProvider = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <UiContext.Provider
            value={{
                isDrawerOpen,
                setIsDrawerOpen
            }}
        >
            { children }
        </UiContext.Provider>
    )
}