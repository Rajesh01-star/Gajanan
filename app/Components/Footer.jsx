import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#18181E] text-white py-8 pb-0">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap items-center justify-between pb-10 border-b-[0.2px] border-white">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
          </div>
          {/* Social Media Links */}
          <div className="flex items-center">
            <a href="#" className="text-xl mr-4 hover:text-red-600">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl mr-4 hover:text-red-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl mr-4 hover:text-red-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl hover:text-red-600">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Page Links */}
        <div className="mt-10">
          <ul className="flex flex-wrap">
            <li className="mr-6">
            <Link href="/home" className="hover:text-red-600">Contact</Link>
            </li>
            <li className="mr-6">
              <Link href="/about" className="hover:text-red-600">
                Contact
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/services" className="hover:text-red-600">
                Contact
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/testimonials" className="hover:text-red-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div className="mt-4">
          <p className="mb-2">
            Phone: <span className="text-red-600">123-456-7890</span>
          </p>
          <p className="mb-2">Address: 123 Main Street, City, Country</p>
          <p>Email: example@example.com</p>
        </div>
      </div>
      <div className="text-center mt-4 bg-black py-8">
        <p>&copy; Copyright Gajanan All Rights Reserved. {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
