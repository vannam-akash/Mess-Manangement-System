import React, { createContext, useState } from 'react';

// Create the context
export const UserTypeContext = createContext();

// Create the provider component
export const UserTypeProvider = ({ children }) => {
    // Initialize the state
    const [userType, setUserType] = useState(null);

    // Define the context value
    const contextValue = {
        userType,
        setUserType,
    };

    // Return the provider component with the context value
    return (
        <UserTypeContext.Provider value={contextValue}>
            {children}
        </UserTypeContext.Provider>
    );
};
