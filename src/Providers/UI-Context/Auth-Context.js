import React from 'react'

export default React.createContext({

    isLoggedContext : false,
    login : (value)=> {},
    logout :(value)=> {},
    setNotificationContext : (value) => {},
})