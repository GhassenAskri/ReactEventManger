import React , {useState,useContext} from 'react';
import Modal from '../components/Modal/Modal'
import './Events.css'
import Event from '../Models/Event'
import {useForm } from'../CustomHooks/useForm'
import RequestQLapi from '../Providers/QraphqlRequestServices/ApiCallServices'
import { NotificationController } from '../components/Notifications/NotificationController'
import NotificationContext from '../Providers/UI-Context/Notification-Context'

export const EventsPage = ()=> {
    const token = localStorage.getItem('accessToken')
    console.log(token);
    const notificationContext = useContext(NotificationContext)
    const requestQLapi = new RequestQLapi('POST', {'Content-Type':'application/json','Authorization' : 'Bearer ' + token});
    const onCancel = () =>{

        setShowModal(false)
    }
    const handleSubmit = (evt)=>{
        console.log(formValues)
        const createEventQuery = requestQLapi.createEvent(formValues)
        requestQLapi.applyRequestFor(createEventQuery)
        .then(res => {
            console.log(res)
    })
    } 
    
    


    const [showModal,setShowModal] = useState();
    const [formValues,handleFormChange] = useForm(Event);

    return (
        <React.Fragment>
            { showModal&&
            <Modal header ='Create Event'
                    cancel = {onCancel}
                    confirm = {handleSubmit}> 
                    <form >
                        <div className="form-control">
                            <label htmlFor="title">Title</label>
                            <input 
                                required="yoooo"
                                type="text" 
                                name="title"
                                value = {formValues.title}
                                onChange={handleFormChange}/>
                        </div>
                        <div className="form-control"> 
                            <label htmlFor="price">Price</label>
                            <input 
                                required="yoooo"
                                type="number" 
                                name="price"
                                value = {formValues.price}
                                onChange={handleFormChange} />
                        </div>
                        <div className="form-control"> 
                            <label htmlFor="date">Date</label>
                            <input 
                                type="date" 
                                name="date"
                                value = {formValues.date}
                                min={formValues.date}
                                onChange={handleFormChange} />
                        </div>
                        <div className="form-control"> 
                            <label htmlFor="description">Description</label>
                            <input 
                                type="text" 
                                name="description"
                                value = {formValues.description}
                                onChange={handleFormChange} />
                        </div>
                    </form>
            </Modal> 
            }
                <div className='event-creation'>
            
                <button onClick = {()=>{
                    setShowModal(true)
                }}> Create your event </button>
                </div>
        </React.Fragment> 
    )}