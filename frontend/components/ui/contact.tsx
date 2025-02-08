import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-8 rounded-lg shadow-lg">
      {}
      <div className="bg-green-600 text-white p-8 md:w-1/3 rounded-lg flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-sm mb-6">We're here to help you</p>

        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Phone className="text-white" size={24} />
            <div>
              <p className="text-sm font-semibold">PHONE</p>
              <p className="text-sm">+(94) 75 698 2000</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="text-white" size={24} />
            <div>
              <p className="text-sm font-semibold">EMAIL</p>
              <p className="text-sm">medixmartpharmacy@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-white" size={24} />
            <div>
              <p className="text-sm font-semibold">LOCATION</p>
              <p className="text-sm">Bellihuloya, Galagama</p>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="p-8 md:w-2/3 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-2">Let's talk</h2>
        <p className="text-green-600 mb-6">Feel free to drop us a line below</p>

        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Message" className="w-full p-3 border rounded-md h-28"></textarea>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
