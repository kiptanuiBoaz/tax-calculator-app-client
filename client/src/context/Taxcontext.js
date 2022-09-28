import React,{createContext,useState} from 'react'

export const TaxContext=createContext();

export const TaxProvider=({children})=>{
    const [taxResult, setTaxResult] = useState({});

    return(
        <TaxContext.Provider value={{
            taxResult,
            setTaxResult
            }}>
            {children}
        </TaxContext.Provider>
    )
}