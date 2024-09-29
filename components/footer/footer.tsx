import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import { MapPinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-20 py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        <div className="flex justify-center sm:justify-start">
          <Image
            src="/foot-logo.png"
            alt="footer logo"
            width={300}
            height={75}
            className="w-auto h-auto"
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="font-bold text-md">Follow Us!</p>
          <div className="flex space-x-9">
            <a aria-label="Github" href="https://github.com/mrrizzz">
              <FaGithub size={24} className="text-white hover:text-gray-300" />
            </a>
            <a aria-label="Instagram" href="https://instagram.com/mrrizzz">
              <FaInstagram
                size={24}
                className="text-white hover:text-gray-300"
              />
            </a>
            <a aria-label="Youtube" href="https://youtube.com/mrrizzz">
              <FaYoutube size={24} className="text-white hover:text-gray-300" />
            </a>
          </div>
        </div>
        <div className="flex flex-col text-sm space-y-4">
          <a
            href="https://maps.google.com"
            aria-label="Location"
            className="flex items-start"
          >
            <MapPinIcon size={24} className="mr-2 flex-shrink-0" />
            <span className="mr-2">:</span>
            <span>
              Institut Teknologi Sepuluh Nopember, Jl. Raya ITS, Keputih, Kec.
              Sukolilo, Surabaya, Jawa Timur 60111
            </span>
          </a>
          <a
            href="mailto:d4ita.eepis@gmail.com"
            aria-label="Email"
            className="flex items-center"
          >
            <HiOutlineMail size={24} className="mr-2 flex-shrink-0" />
            <span className="mr-2">:</span>
            <span>d4ita.eepis@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-100 text-center mt-6 pt-6 text-sm">
        <p>© 2024 TaniKita. All rights reserved.</p>
      </div>
    </footer>
  );
}
