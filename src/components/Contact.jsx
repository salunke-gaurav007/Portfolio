import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs.sendForm('service_90nldr3', 'template_z49r8ao', formRef.current, 'QDanlxHoMRJAmYgtr')
        .then(() => {
          alert('Message sent successfully!');
          formRef.current.reset();
        })
        .catch((error) => {
          console.error('Email send error:', error.text);
          alert('Failed to send message. Please try again.');
        });
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <input type="text" name="user_name" placeholder="Name" className="w-full p-3 rounded-lg bg-slate-700 placeholder-gray-300" required />
        <input type="email" name="user_email" placeholder="Email" className="w-full p-3 rounded-lg bg-slate-700 placeholder-gray-300" required />
        <textarea name="message" rows="4" placeholder="Message" className="w-full p-3 rounded-lg bg-slate-700 placeholder-gray-300" required></textarea>
        <button type="submit" className="bg-blue-600 px-6 py-2 rounded-lg">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
