import { createContext, useState } from "react";
import React from 'react';

export const providerContext = createContext();



const CreateContext = ({children}) => {
    const [loading,setLoading] = useState(false)
    return (
        <div>
            <providerContext.Provider value={ [loading , setLoading]} >
                {children}
            </providerContext.Provider>
        </div>
    );
};

export default CreateContext;