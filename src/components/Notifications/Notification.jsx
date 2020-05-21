import React from 'react'
import './Notification.css'


export const Notification = ( {notificationText = null, statusColor = null} )=> {
 
    return (
       
             <div className = 'notification'>
                    <div className = {statusColor}>
                        <span>
                            {notificationText}
                        </span>                
                    </div>
                </div>
    
      
               
           
    )

}