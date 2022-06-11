import React ,{createContext,useEffect,useState} from "react"
import Loading from "./user/components/loading" 

export const GlobaleState = createContext()
export const DataProvider =({children})=>{
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    },[]);

    return(
        <GlobaleState.Provider >
            {
                loading ?
                <Loading /> 
            :children
            }
              
        </GlobaleState.Provider>
    )
}
