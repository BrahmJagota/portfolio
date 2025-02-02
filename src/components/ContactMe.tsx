import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const form = useRef<null | HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      setStatusMessage(null); 
      setIsSending(true); 
      try {
        await emailjs.sendForm("service_gf2ws9a", "template_m9pnr84", form.current, {
          publicKey: "ZcEmspR_sqEzuGmX-",
        });
        console.log("SUCCESS!");
        setStatusMessage("Your message has been sent successfully! 🚀");
        form.current?.reset();
      } catch (error) {
        console.log("FAILED...", error);
        setStatusMessage("Oops! Something went wrong. Please try again later.");
      } finally {
        setIsSending(false); 
      }
    }
  };

  return (
    <div className="min-h-screen w-4/5 mx-auto mt-16">
      <div className="text-6xl lg:text-9xl font-extrabold mb-10">
        <h1>Get in touch</h1>
        <h1>with me</h1>
      </div>
      <div className="grid gap-8 md:grid-cols-3 text-sm">
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
        <div className="md:col-span-2">
          <form ref={form} onSubmit={sendEmail} className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-sm font-bold">
                Your Full Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your full name"
                required
                className="h-10 px-3 py-2 placeholder-gray-500 text-sm border border-input focus-visible:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-bold">
                Your Email Address
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email address"
                required
                className="h-10 px-3 py-2 placeholder-gray-500 text-sm border border-input focus-visible:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-bold">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Type your message"
                  required
                  className="placeholder-gray-500 text-sm border flex-1"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`bg-black text-white w-32 h-12 border-2 hover:bg-white hover:text-black text-bold transition-all cursor-pointer ${isSending ? 'opacity-50' : ''}`}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </form>

          {statusMessage && (
            <div className="mt-4 text-center text-sm text-gray-600">
              {statusMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
