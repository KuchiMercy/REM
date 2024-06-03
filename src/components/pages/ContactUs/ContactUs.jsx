import React from 'react'
import ContactBody from './ContactBody'

const ContactUs = () => {
  return (
    <div>
      <header className=" bg-contact bg-cover bg-center w-full h-[500px] md:h-[85vh] relative">
        <div className="absolute flex flex-col justify-center mx-7 md:mx-10 items-start  h-[500px] max-w-[70%] md:max-w-[50%] text-white">
          <h5 className="text-4xl md:text-5xl pb-4 font-bold">GET IN TOUCH WITH RCCG ROYAL EMBASSY </h5>
         
        </div>
       
      </header>

      <ContactBody/>
    </div>
  )
}

export default ContactUs