import React, { useEffect ,useState } from 'react';


const ContactForm = () => {
  useEffect(() => {
    document.title = 'Contact US - CCIFS'; // Set the title for the page
}, []); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xjkbneyg', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.errors[0].message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg flex flex-col lg:flex-row">
        {/* Left Container - Map and Contact Details */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 p-4">
        <h2 className="mb-2 text-2xl font-extrabold  text-gray-900 dark:text-white">Contact Details</h2>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27992.233157767434!2d77.12538499999998!3d28.718675000000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd748b72468b%3A0xdf71e99b811695bc!2sTabish%20Sarosh%20%26%20Associates%20%7C%20Best%20Law%20firm%20in%20Delhi%20%7C%20Criminal%20Lawyer.!5e0!3m2!1sen!2sin!4v1727188441338!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '10px'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Head Office Address:</p>
            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27992.233157767434!2d77.12538499999998!3d28.718675000000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd748b72468b%3A0xdf71e99b811695bc!2sTabish%20Sarosh%20%26%20Associates%20%7C%20Best%20Law%20firm%20in%20Delhi%20%7C%20Criminal%20Lawyer.!5e0!3m2!1sen!2sin!4v1727188441338!5m2!1sen!2sin"><p className="text-gray-700 dark:text-gray-300 mb-2">
              220, 2nd FLOOR AMBA TOWER PLOT NO 2 DC CHOWK COMMUNITY CENTER NEAR POLICE STATION, PRASHANT VIHAR, SECTOR 9, ROHINI DELHI-110085
            </p></a>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Mail:</p>
            <p className="text-blue-500 dark:text-blue-400 mb-4">
              <a href="mailto:ccifs.forensic@gmail.com" className="underline">ccifs.forensic@gmail.com</a>
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Phone No:</p>
            <p className="text-gray-700 dark:text-gray-300">7042915444, 9971695444</p>
          </div>
        </div>

        {/* Right Container - Contact Form */}
        <div className="lg:w-1/2 p-4">
          <h2 className="mb-6 text-4xl font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@flowbite.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Let us know how we can help you"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Leave a comment..."
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
