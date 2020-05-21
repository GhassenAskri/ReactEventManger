import React  from "react";
import './Modal.css'
import { Backdrop } from '../Backdrop/Backdrop'

const Modal = props => (
    <Backdrop>
            <div className='Modal'>
            <header>
                    <h3>{props.header}</h3>
            </header>
            <div>
                    {props.children}
            </div>
            <div className='footer'>
                    <button onClick ={props.confirm} > Create </button>
                    <button onClick ={props.cancel}> Cancel </button>
            </div>
            </div>
    </Backdrop>
);

export default Modal