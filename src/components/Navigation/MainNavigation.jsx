import React, { useContext, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import "../../App.css";
import AuthContext from "../../Providers/UI-Context/Auth-Context";
import NotificationContext from "../../Providers/UI-Context/Notification-Context";
import { Notification } from "../Notifications/Notification";

const NavigationForLoggedUser = () => {
  let Authcontext = useContext(AuthContext);

  return (
    <React.Fragment>
      <li>
        <NavLink to="./events"> Events </NavLink>
      </li>
      <li>
        <NavLink to="./bookings"> Bookings </NavLink>
      </li>

      <button
        onClick={() => {
          Authcontext.logout(false);
        }}
      >
        Logout
      </button>
    </React.Fragment>
  );
};

const NavigationForUnloggedUser = () => {
  return (
    <Fragment>
      <li>
        <NavLink to="./auth"> Authentication </NavLink>
      </li>
    </Fragment>
  );
};

export const MainNavigation = () => {
  debugger;
  let authContext = useContext(AuthContext);
  let notificationContext = useContext(NotificationContext);

  console.log(authContext);
  console.log(notificationContext);
  return (
    <React.Fragment>
      {notificationContext.presentNotificationContext ? (
        <Notification
          notificationText={notificationContext.textNotificationContext}
          statusColor={notificationContext.backgroundColorContext}
        />
      ) : (
        <header className="MainNavigation">
          <div className="MainNavigation__logo">
            <h1>Ask_Data</h1>
          </div>
          <nav className="MainNavigation__items">
            {authContext.isLoggedContext !== true ? (
              <ul>
                <NavigationForUnloggedUser />
              </ul>
            ) : (
              <ul>
                <NavigationForLoggedUser />
              </ul>
            )}
          </nav>
        </header>
      )}
    </React.Fragment>
  );
};
