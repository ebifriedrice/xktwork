import React from 'react';
import ContactForm from './components/ContactForm';



const ContactSection: React.FC = () => {
    return (
        <div id="contact" className='absolute w-full top-[510%] h-screen p-10 lg:p-28'>
            <ContactForm/>
        </div>
    );
};

export default ContactSection;

