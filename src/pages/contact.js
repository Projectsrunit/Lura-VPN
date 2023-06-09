import Layout from "@/layout/Layout";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tpzmvkf",
        "template_nam4zt6",
        form.current,
        "uvq3fuFRXafvsKCGC"
      )
      .then(
        (result) => {
          e.target.reset()
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Layout>
      <div className="min-h-screen py-16">
        <h1 className="text-5xl text-[32px] leading-relaxed text-center py-16 font-anglecia text-[#C9F4EA]">
          Contact Us
        </h1>
        <div className="lg:w-4/6 w-5/6 bg-[#F8FBFF] rounded-xl min-h-[70vh] mx-auto font-axiforma font-medium">
          <h2 className="text-xl pl-16 pt-10">Send a Message</h2>
          <form
            className="space-y-6 py-10 md:px-16 px-6"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="email" className="block text-xs leading-6">
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="first_name"
                    type="text"
                    autoComplete="firstName"
                    required
                    className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-[#E3E4E5] placeholder:text-gray-400 outline-[#A38CEE] focus:ring-[#A38CEE] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs leading-6">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="lastName"
                    required
                    className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-[#E3E4E5] placeholder:text-gray-400 outline-[#A38CEE] focus:ring-[#A38CEE] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="email" className="block text-xs leading-6">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-[#E3E4E5] placeholder:text-gray-400 outline-[#A38CEE] focus:ring-[#A38CEE] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-xs leading-6">
                    Phone Number
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="user_phone"
                    type="tel"
                    autoComplete="phone-number"
                    required
                    className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-[#E3E4E5] placeholder:text-gray-400 outline-[#A38CEE] focus:ring-[#A38CEE] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-xs leading-6">
                  Your Message
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  autoComplete="message"
                  required
                  className="block w-full rounded-md border-0 py-2 pl-2 text-black shadow-sm ring-1 ring-inset ring-[#E3E4E5] placeholder:text-gray-400 outline-[#A38CEE] focus:ring-[#A38CEE] sm:text-sm sm:leading-6 h-40"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex rounded-md bg-[#5D18EB] px-16 py-3 mx-auto sm:mx-0 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5D18EB]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
