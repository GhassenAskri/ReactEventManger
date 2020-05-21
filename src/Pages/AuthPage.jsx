import React, { useContext } from 'react';
import { useState } from "react";
import './Auth.css'
import RequestQLapi from '../Providers/QraphqlRequestServices/ApiCallServices'
import AuthContext from '../Providers/UI-Context/Auth-Context'
import NotificationContext from '../Providers/UI-Context/Notification-Context'
import { NotificationController } from '../components/Notifications/NotificationController'




export const AuthPage = ()=> {
    const previousState = '';
    var disabledButton = false;
    const [email, setEmail] = useState(previousState);
    const [password, setPassword] = useState(previousState);
    const requestQLapi = new RequestQLapi('POST', {'Content-Type':'application/json'});
    let  authContext = useContext(AuthContext)
    let notificationContext = useContext(NotificationContext)



    const handleSubmit = (evt) => {
        evt.preventDefault();
        const createUserquery = requestQLapi.createUserMutation(email, password);
        console.log('yoooo',requestQLapi.applyRequestFor(createUserquery))
    }

    const handleLogin = ( )=> {
        const loginUserQuery = requestQLapi.loginUserQuery(email, password);
        requestQLapi.applyRequestFor(loginUserQuery,true)
        .then(res => {
            if(res){
                if(res.login){
                    authContext.login(true)
                    localStorage.setItem('accessToken',res.login.accessToken);
                    }
                else {
                    console.log(res)  
                    disabledButton = NotificationController(res.message,'warning',notificationContext)
                    console.log(disabledButton)
                   
                }   
            }else {
                disabledButton = NotificationController('server issue','danger',notificationContext,true)
                   
            }
            
        })
    }

  
    
   

    return(
        <div>
            <form 
                className="auth-form" 
                onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value = {email}
                        onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-control"> 
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        value = {password}
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-action">
                <button type="submit"> Create an account </button>
            <button type="button" disabled ={disabledButton} onClick  = {handleLogin}> {authContext.isLogged !==true ? 'Sign In' :'Sign Out'}</button>
               
                <span>I forgot my password</span>
                </div>
            </form>
            {/* <video id="video" width="720" height ="560" autoPlay muted> </video>  */}
             
        </div>    
    )
    
}