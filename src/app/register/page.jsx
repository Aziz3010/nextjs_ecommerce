"use client"
import InputComponent from '@/formElements/InputComponent';
import SelectComponent from '@/formElements/SelectComponent';
import { registrationFormControls } from '@/utils';
import React from 'react'

const isRegistered = false;

function Register() {
  return (
    <div className='bg-white relative'>
        {/* <div className='flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row'> */}
        <div className='flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto'>
            {/* <div className='flex flex-col items-center justify-between w-full pr-10 pl-10 lg:flex-row'> */}
            <div className='flex flex-col items-center justify-between w-full pr-10 pl-10'>
                <div className='w-full mt-10 mr-0 ml-0 mb-0 relative max-w-2xl lg:mt-0 lg:w-5/12'>
                    <div className='flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10'>
                        <p className='w-full text-4xl font-medium text-center font-serif'>
                            {isRegistered ? 'Registration successful!' : 'Sign up for an account' }
                        </p>

                        {isRegistered ?
                            <button className='w-full mt-4 inline-flex items-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide'>Login</button>
                        : 
                            <div className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
                                {registrationFormControls.map(controlItem => (
                                    controlItem.componentType == 'input' ?
                                        <InputComponent key={controlItem.id} label={controlItem.label} type={controlItem.type} placeholder={controlItem.placeholder}/>
                                    :
                                        controlItem.componentType == 'select' ? 
                                            <SelectComponent key={controlItem.id} label={controlItem.label} options={controlItem.options} />
                                        :
                                            null
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register