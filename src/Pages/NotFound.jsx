import React from 'react'
import './NotFound.css'
import {Backdrop} from  '../components/Backdrop/Backdrop'
export const NotFound = ( )=>{
    return (
        <React.Fragment>
             <Backdrop>
                 <div className='not_found'>
                    <h1>⚠</h1>
                    <h2>No connection to the internet</h2>
                    <p>This Display has a connection to your network but no connection to the internet.</p>
                    <p>The connection to the outside world is needed for updates and keeping the time.</p>
                 </div>
             </Backdrop>     
        </React.Fragment>
        
    )
   
}

