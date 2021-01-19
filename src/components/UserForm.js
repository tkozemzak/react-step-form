import React, { useState } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

const UserForm = () => {
    const [step, setStep] = useState(1)
    const [inputState, setInputState] = useState('')
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    })

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step -1)
    }

    const handleChange = input => e => {
        setValues({...values, [input]: e.target.value})
        console.log("state:", values);
    }

   

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                    nextStep={nextStep} 
                    handleChange={handleChange}
                    values={values}/>
                )
            case 2:
                return (
                    <FormPersonalDetails 
                    nextStep={nextStep}
                    prevStep={prevStep} 
                    handleChange={handleChange}
                    values={values}/>
                )
            case 3:
                return (
                    <h1>Confirm</h1>
                )
            case 4:
                return (
                    <h1>Success</h1>
                )
        }
            
        
        
    
}

export default UserForm
