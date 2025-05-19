import Image from "next/image";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Image
              src="/shaila_logo-260-beyaz.png"
              alt="Shaila Logo"
              width={150}
              height={50}
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
            <a href="#about" className="hover:underline">
              Über uns
            </a>
            <a href="#products" className="hover:underline">
              Produkte
            </a>
            <a href="#blog" className="hover:underline">
              Blog
            </a>
            <a href="#contact" className="hover:underline">
              Kommunikation
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p>Shaila GmbH</p>
            <p>Nürnberger Straße 150</p>
            <p>96050 Bamberg</p>
            <p>Deutschland</p>
            <p>
              <a href="tel:+491633372113" className="hover:underline">
                +49 163 3372113
              </a>
            </p>
          </div>

          {/* Instagram Icon */}
          <div className="flex mt-4 md:mt-0 md:ml-4">
            <a
              href="https://www.instagram.com/shailagmbh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
              aria-label="Visit our Instagram page"
              title="Visit our Instagram page"
            >
              <FaInstagram size={24} className="mr-2" />
            </a>
            <a
              href="mailto:info@shailagmbh.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
              aria-label="Send us an email"
              title="Send us an email"
            >
              <FaEnvelope size={24} className="mr-2" />
            </a>
            <a
              href="https://wa.me/491633372113"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
              aria-label="Send us an email"
              title="Send us an email"
            >
              <FaWhatsapp size={24} className="mr-2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
