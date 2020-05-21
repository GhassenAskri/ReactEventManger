import React, { Component } from "react";
import {NotFound} from '../../Pages/NotFound';
export default function(ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false
    };

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener("online", this.handleConnectionChange);
      window.addEventListener("offline", this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener("online", this.handleConnectionChange);
      window.removeEventListener("offline", this.handleConnectionChange);
    }

    handleConnectionChange = () => {
        debugger
      const condition = navigator.onLine ? "online" : "offline";
      if (condition === "online") {
        const webPing = setInterval(() => {
          fetch("//google.com", {
            mode: "no-cors"
          })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing);
              });
            })
            .catch(error => console.log(error));
        }, 2000);
        return;
      }

   
      return this.setState({ isDisconnected: true });

    };

    render() {
        debugger
      const { isDisconnected } = this.state;
      return (
        <div>
            {isDisconnected ? 
              <NotFound />
            :   <ComposedComponent  />}
         
        </div>
      );
    }
  }

  return NetworkDetector;
}
