import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'

import {addBusiness} from '../../store/0business'

const STATES =[
    "--",
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
]
function NewBusinessForm() {

    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory()
    const dispatch = useDispatch()
        
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState(STATES[0])
    const [zipCode, setZipCode] = useState('')
    const [errors, setErrors] = useState([])
    const [image, setImage] = useState('')

    useEffect(()=>{
        const errorHandler =[]

        if(!title.length) errorHandler.push('please enter business name')
        if(!description.length) errorHandler.push('please enter business description')
        if(!image.length) errorHandler.push('please enter business image')
        if(!address.length) errorHandler.push('please enter business street address')
        if(!city.length) errorHandler.push('please enter city name')
        if(!zipCode.length || zipCode.length !== 5) errorHandler.push('please enter valid Zip Code')

        setErrors(errorHandler)
    },[title,description,address,city,zipCode,image.length])


    const handleSubmit = () => {
        const ownerId = sessionUser.id
        history.push('/')
        return dispatch(addBusiness({ownerId,title,description,image,address,city,state,zipCode}))
    }

    return(
        <>
            <div className='formcontainer'>  
                <form className='form'
                onSubmit={handleSubmit}
            >
                <ul className='error'>
                {!!errors && errors.map(error=>(
                    <li key={error}>{error}</li>
                ))}
                </ul>
                <div className='loginLablediv'>
                <label className='loginLable'> Business Name </label>
                    <input
                    placeholder='Business Name'
                    className='signupInput'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='loginLablediv'>
                <label className='loginLable'> Business Description</label>
                    <input
                    placeholder='Business Description'
                    className='signupInput'
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='loginLablediv'>
                <label className='loginLable'> Image
                </label>
                    <input
                    placeholder='Please enter image url'
                    className='signupInput'
                    type="text"
                    src={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className='loginLablediv'>
                <label className='loginLable'> Street address
                </label>
                    <input
                    placeholder='Street address'
                    className='signupInput'
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className='loginLablediv'>
                <label className='loginLable'> City
                </label>
                    <input
                    placeholder='City'
                    className='signupInput'
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className='loginLablediv'>
                <div className='loginLable'> State
                    <select
                        className='signupInput'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        >
                        {STATES.map(state => (
                            <option
                            key={state}
                            >
                            {state}
                        </option>
                        ))}
                    </select>
                </div>
                </div>
                <div className='loginLablediv'>
                <label className='loginLable'> Zip Code
                </label>
                    <input
                    placeholder='zip Code'
                    className='signupInput'
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    />
                </div>
                <button
                disabled={errors.length ? true : false}
                type="submit"
                >
                Add Business
                </button>
            </form>  
        </div>
    </>  
    )


}

export default NewBusinessForm
