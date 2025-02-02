import { useRef } from "react";
import emailjs from '@emailjs/browser';


export default function ContactMe() {
    const form = useRef<null | HTMLFormElement>(null);
    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(form.current){
       await emailjs
        .sendForm("service_gf2ws9a", "template_m9pnr84", form.current, {
          publicKey: "ZcEmspR_sqEzuGmX-",
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current?.reset();
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
    }
    }
  return (
    <div className="min-h-screen w-4/5 mx-auto mt-16">
      <div className="text-9xl font-extrabold mb-10">
        <h1>Get in touch</h1>
        <h1>with me</h1>
      </div>
      <div className="grid gap-8  md:grid-cols-3 text-sm ">
        <div className="text-gray-500">
          <p className="mb-4">
            Let's Connect! Drop a line and let's start a conversation. Whether
            it's about coding adventures, music recommendations, or gaming
            strategies, I'm all ears. Reach out, and let's create something
            awesome together! 🚀
          </p>
          <p>Feel free to reach out:</p>
          <p>Call me: +91 8699336265</p>
          <p>Email me: jagotabrahm@gmail.com</p>
        </div>
        <div className="md:col-span-2 ">
          <form ref={form} onSubmit={sendEmail} className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-sm font-bold">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="h-10 px-3 py-2 placeholder-gray-500 text-sm border border-input focus-visible:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-bold">
                Your Email Address
              </label>
              <input
                type="text"
                name="user_email"
                placeholder="Enter your email address"
                className="h-10 px-3 py-2 placeholder-gray-500 text-sm border border-input focus-visible:outline-none"
              />
            </div>

            <div className=" md:col-span-2">
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-bold">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Type your message"
                  className="placeholder-gray-500 text-sm border flex-1"
                ></textarea>
              </div>
            </div>
            <button
              
              className="bg-black text-white w-32 h-12 border-2 hover:bg-white hover:text-black text-bold transition-all cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
