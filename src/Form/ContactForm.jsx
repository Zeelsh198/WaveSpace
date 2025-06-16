/**
 * @component ContactForm
 *
 * `ContactForm` is a fully responsive form component for user inquiries or project discussions.
 * It includes fields for email, name, budget, discovery source, a message area, service checkboxes,
 * and a submission button, along with an optional contact email link.
 *
 * @returns {JSX.Element} A styled contact form with input fields, dropdowns, checkboxes, and a submit button.
 *
 * @example
 * <ContactForm />
 */


import React from 'react';

const ContactForm = () => {
  return (
    <div className="font-sans max-w-xl mx-auto p-4">
      {/* Email and Full Name Row */}
      <div className="flex flex-col sm:flex-row gap-5 mb-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full sm:w-1/2 p-3 border border-gray-300  text-gray-500 text-base focus:outline-none"
        />
        <input
          type="text"
          placeholder="Full name"
          className="w-full sm:w-1/2 p-3 border border-gray-300  text-gray-500 text-base focus:outline-none"
        />
      </div>

      {/* Project Budget and How Did You Hear About Us Row */}
      <div className="flex flex-col sm:flex-row gap-5 mb-5">
        <select
          className="w-full sm:w-1/2 p-3 border border-gray-300  text-gray-500 text-base focus:outline-none appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%236b7280%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:16px]"
        >
          <option value="" disabled >
            Project budget
          </option>
        </select>
        <select
          className="w-full sm:w-1/2 p-3 border border-gray-300  text-gray-500 text-base focus:outline-none appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%236b7280%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:16px]"
        >
          <option value="" disabled >
            How did you hear about us?
          </option>
        </select>
      </div>

      {/* Textarea */}
      <div className="mb-5">
        <textarea
          placeholder="Tell us about your product and goals."
          className="w-full p-3 border border-gray-300  text-gray-500 text-base min-h-[100px] resize-none focus:outline-none"
        />
      </div>

      {/* How Can We Help You Section */}
      <div className="mb-5">
        <label className="block text-base font-bold text-gray-800 mb-3">
          How can we help you?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            'UI/UX Design',
            'SaaS Design',
            'Branding',
            'CRO',
            'Mobile app',
            'Development',
            'MVP Development',
            'Web Design',
          ].map((option) => (
            <label key={option} className="flex items-center justify-center">
              <input type="checkbox" className="hidden" />
              <span className="w-full p-2 border border-gray-300  text-sm text-gray-800 text-center cursor-pointer">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Send Message Button and Email Link */}
      <div className="flex flex-col sm:flex-row items-center gap-5 justify-between">
        <button className="px-6 py-4 bg-indigo-500 text-white hover:bg-black rounded-full text-lg">
          Send message
        </button>
        <div className="text-sm text-gray-600 flex flex-col text-right">
          Prefer email?{' '}
          <a href="mailto:hello@wavespaceagency" className="text-black underline font-bold">
            hello@wavespaceagency
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;