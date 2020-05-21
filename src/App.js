import React, {useState,useEffect}from 'react';
import {BrowserRouter , Route , Redirect , Switch}  from 'react-router-dom';
import {AuthPage} from './Pages/AuthPage'
import { BookingPage } from "./Pages/BookingPage";
import { EventsPage } from "./Pages/EventsPage";
import { MainNavigation } from "./components/Navigation/MainNavigation"
import './App.css';
import  AuthContext from "./Providers/UI-Context/Auth-Context"
import NotificationContext from "./Providers/UI-Context/Notification-Context"
import  NetworkDetector from "./components/NetworkDetector/NetworkDector"
import { showNotification } from "./Utils/BrowserNotification"




function App() {



  useEffect(() => {
    showNotification('hey beautiful word here ')
    
  }, [])
 
  const [isLoggedState, setisLoggedState] = useState(localStorage.getItem('isLogged') ? true : false);
  const [textNotification, setTextNotification] = useState()
  const [colorNotification, setColorNotification] = useState()
  const [presentNotification, setPresentNotification] = useState()



  const loginState = ()=>{
    setisLoggedState(true)
    localStorage.setItem('isLogged',true)
  }
  const logoutState = ()=>{
    setisLoggedState(false)
    localStorage.clear()
  } 
  
  const setNotificationToUser = (textNotificationValue, colorNotificationValue , presentNotificationValue )=>{  
    
     setColorNotification(colorNotificationValue) 
     setTextNotification(textNotificationValue) 
     setPresentNotification(presentNotificationValue)
    
      
  }   
  return (
    <div className="App">
      <React.Fragment>
        <AuthContext.Provider value= {{
                                      isLoggedContext : isLoggedState , 
                                      login : loginState , 
                                      logout : logoutState,
                                      }}>
              <NotificationContext.Provider value = {{
                                       backgroundColorContext : colorNotification,
                                       textNotificationContext : textNotification,
                                       presentNotificationContext : presentNotification,
                                       setNotificationContext  :setNotificationToUser
              }}>
              <BrowserRouter> 
             
                  <MainNavigation  />
            
                <main className ="main-content">
                  <Switch>
                    {isLoggedState === false &&  <Redirect  from ="/"  to ="/auth"  exact/> }
                    {isLoggedState === false &&  <Redirect  from ="/events"  to ="/auth"  exact/> }
                    {isLoggedState === false &&  <Redirect  from ="/bookings"  to ="/auth"  exact/> }
                    {isLoggedState === true &&  <Redirect  from ="/auth"  to ="/events"  exact/> }
                    <Route  path ="/auth" component ={AuthPage}/>
                    <Route  path ="/events" component = {EventsPage}/>
                    <Route  path ="/bookings" component ={BookingPage}/>

                  </Switch>
                </main>
              </BrowserRouter>
              </NotificationContext.Provider>
        </AuthContext.Provider>
      </React.Fragment>
    </div>
  );
}
export default NetworkDetector(App);
