


export const NotificationController = (message, errorStatus, context, serverError=false)=>{
if(serverError === false){
    context.setNotificationContext(message,errorStatus, true)
    setInterval(()=>{
        context.setNotificationContext(null,null, false)
    },3000) 
}else(
    context.setNotificationContext(message,errorStatus, true)
)
  return true 
}   