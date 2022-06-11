import React,{createContext} from "react";
import 'react-notifications-component/dist/theme.css'
import  {Store } from 'react-notifications-component'
import { ReactNotifications } from 'react-notifications-component'
export  const Notification = createContext()
export const  NotificationProvider =({children})=>{
    

    const   ShowNotifications =(props)=>{

        Store.addNotification({
            title: `${props.title}`,
            message: `${props.message}`,
            type: `${props.type}`,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true
            }
          })
    }

             
    return(
      <Notification.Provider value={{ShowNotifications }}>
          <ReactNotifications  />  
       {children}
      </Notification.Provider>
)
}