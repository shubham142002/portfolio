import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS dynamic parameters - make sure these match your template variables
    const templateParams = {
      to_name: "Shubham",
      user_name: formData.name,
      name: formData.name,
      from_name: formData.name,
      user_email: formData.email,
      reply_to: formData.email,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_uugftft",
        "template_e4crj1i",
        templateParams,
        "Ijk9GvhmV0Y_yz1qX"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg className="w-6 h-6 mr-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  shubhamp142002@gmail.com
                </p>
                <p className="flex items-center">
                  <svg className="w-6 h-6 mr-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  +91 7567618333
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">Social Links</h3>
              <div className="flex space-x-4">
                {/* Add your social media links here */}
                <a href="https://github.com/shubham142002" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/shubham1402" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* Instagram */}
              <a
                href='https://www.instagram.com/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-pink-500 transition-colors'
              >
                <svg
                  className='w-6 h-6 '
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zM12 5.838c-3.403 0-3.64.012-4.927.07-1.212.055-1.837.252-2.256.464-.512.252-.877.616-1.128 1.128-.212.419-.409 1.044-.464 2.256-.058 1.287-.07 1.524-.07 4.927s.012 3.64.07 4.927c.055 1.212.252 1.837.464 2.256.252.512.616.877 1.128 1.128.419.212 1.044.409 2.256.464 1.287.058 1.524.07 4.927.07s3.64-.012 4.927-.07c1.212-.055 1.837-.252 2.256-.464.512-.252.877-.616 1.128-1.128.212-.419.409-1.044.464-2.256.058-1.287.07-1.524.07-4.927s-.012-3.64-.07-4.927c-.055-1.212-.252-1.837-.464-2.256-.252-.512-.616-.877-1.128-1.128-.419-.212-1.044-.409-2.256-.464-1.287-.058-1.524-.07-4.927-.07zM12 7.645c2.4 0 4.355 1.955 4.355 4.355s-1.955 4.355-4.355 4.355-4.355-1.955-4.355-4.355 1.955-4.355 4.355-4.355zm0 7.16a2.805 2.805 0 110-5.61 2.805 2.805 0 010 5.61zm5.502-7.936a1.044 1.044 0 110-2.088 1.044 1.044 0 010 2.088z' />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href='https://wa.me/yourphonenumber'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-green-500 transition-colors'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2C6.477 2 2 6.477 2 12c0 1.841.496 3.566 1.354 5.07L2 22l4.93-1.354A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.803 14.197l-.696.697c-.195.196-.453.305-.707.305-.565 0-1.693-.314-2.844-1.465-1.15-1.15-1.465-2.278-1.465-2.844 0-.255.109-.512.304-.707l.697-.696c.189-.189.473-.267.746-.189.277.079.617.123.995.123.511 0 1.017-.102 1.472-.304.425-.187.786-.43 1.037-.682.269-.268.463-.667.682-1.037.202-.454.304-.96.304-1.472 0-.378-.044-.718-.123-.995a.752.752 0 00-.189-.746l-.697-.696a1.003 1.003 0 00-.707-.304c-.802 0-1.887.467-2.984 1.564-1.097 1.097-1.564 2.182-1.564 2.984 0 .255.109.512.304.707l.696.697c.188.189.267.473.189.746-.079.277-.123.617-.123.995 0 .801.467 1.886 1.564 2.984 1.097 1.097 2.182 1.564 2.984 1.564.378 0 .718-.044.995-.123a.75.75 0 00.746-.189l.697-.696a1.003 1.003 0 00.304-.707c0-.802-.467-1.887-1.564-2.984-1.097-1.097-2.182-1.564-2.984-1.564-.378 0-.718.044-.995.123a.751.751 0 00-.746.189z' />
                </svg>
              </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor='name' className='block text-sm font-medium mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                className='w-full px-4 py-2 bg-white/10 border border-blue-500/20 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200'
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                className='w-full px-4 py-2 bg-white/10 border border-blue-500/20 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Write your message here...'
                rows='4'
                className='w-full px-4 py-2 bg-white/10 border border-blue-500/20 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200 resize-y'
              />
            </div>
            <button
              type='submit'
              className='w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-semibold text-lg'
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 