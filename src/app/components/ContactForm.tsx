// ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between items-start">
      {/* Contact Form */}
      <div className="w-full md:w-2/5 p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form action="/util/processContactForm" id="contact_form" method="post" name="contact_form">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Alternative Contacts and Map */}
      <div className="w-full md:w-3/5 p-10 md:text-sm">
        <p className="mb-4">
          If your browser does not support forms or you prefer not to use them, you can send e-mail directly to sales@xktengineering.com, call us at (707) 562-2500, or fax us at (707) 562-2565.
          <br />
          <br />
          We are physically located at Building 390, Railroad Avenue, Mare Island, CA 94592.
          <br />
          <br />
          Our mailing address is: P.O. Box 152, Vallejo, CA 94590.
          <br />
          <br />
          Driving directions to our facility are available by using the map below.
        </p>
        <iframe
          title="Map"
          className="w-full h-64"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1607701.5075046262!2d-122.266711!3d38.092686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808574828b0e564f%3A0xb4373bcbd0a0502d!2s390%20Railroad%20Ave%2C%20Vallejo%2C%20CA%2094592!5e0!3m2!1sen!2sus!4v1706991698577!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
