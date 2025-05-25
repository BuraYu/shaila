"use client";

import { useRef, useState } from "react";
import { MailIcon, PhoneCallIcon } from "lucide-react";

const Contact = () => {
  const form = useRef(null);

  return (
    <div className="bg-[#F9FAFB] py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Kontakt</h1>
        <p className="text-gray-400 text-md">
          Sie haben noch Fragen zu unseren Produkten? Wir helfen Ihnen gerne
          weiter. Nutzen Sie das Kontaktformular, WhatsApp oder E-Mail – wir
          freuen uns auf Ihre Nachricht.
        </p>
      </div>

      <section
        id="kontakt"
        className="max-w-7xl mx-auto grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 px-4 md:px-12 lg:px-24"
      >
        {/* Form Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Füllen Sie das Formular aus. <br /> Es ist ganz einfach.
          </h2>
          <form ref={form} className="flex flex-col space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="E-Mail"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Schreibe deine Nachricht..."
              className="border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="submit"
              value="Senden"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition"
            />
          </form>
        </div>

        {/* Separator */}
        <div className="hidden md:flex justify-center">
          <div className="w-px h-[500px] bg-gray-300 opacity-40" />
        </div>
        <div className="md:hidden my-8">
          <div className="h-px w-full bg-gray-300 opacity-40" />
        </div>

        {/* Direct contact Section */}

        <div className="flex flex-col items-center text-center justify-center ">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Direkter Kontakt
          </h2>
          <div className="flex flex-col h-full items-center justify-center">
            <p className="text-gray-600 mb-6 max-w-md">
              Sie können uns gerne über das Formular oder direkt über WhatsApp
              oder E-Mail kontaktieren.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <a
                href="https://wa.me/491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition w-full sm:w-fit"
              >
                <PhoneCallIcon className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:deinname@example.com"
                className="flex items-center justify-center space-x-3 bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-md transition w-full sm:w-fit"
              >
                <MailIcon className="w-5 h-5" />
                <span>E-Mail senden</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
