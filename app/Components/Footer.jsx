import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaMapMarkerAlt as LocationIcon,
  FaPhoneAlt as MobileIcon,
  FaEnvelope as EmailIcon,
} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full bg-[#18181E] text-white pt-8 lg:mt-40 mt-20">
      <div className="container mx-auto lg:w-[1140px] px-4">
        <div className="flex flex-wrap items-center justify-between pb-10 border-b-[1px] border-[#373745]">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
          </div>
          {/* Social Media Links */}
          <div className="flex items-center ">
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
        <div className="flex flex-col lg:flex-row mt-10 justify-start items-start gap-10 px-4">
          <div className="flex flex-wrap lg:gap-16 gap-4 w-1/3">
            <div className="mb-4 w-full md:w-auto">
              <ul className="mr-8 md:mr-0 text-[#6D7076]">
                <li className="mb-2">
                  <Link href="/" className="hover:text-red-600">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/about" className="hover:text-red-600">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/services" className="hover:text-red-600">
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="hover:text-red-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 w-full md:w-auto">
              <ul className="mr-8 md:mr-0 text-[#6D7076]">
                <li className="mb-2">
                  <Link href="/about" className="hover:text-red-600">
                    Testimonials
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/services" className="hover:text-red-600">
                    FAQs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/story" className="hover:text-red-600">
                    Story
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Image column */}
          <div className="grid grid-cols-3 gap-2 ">
            <Image
              src="/footerImages/footer1.png"
              alt="Image 1"
              width={76}
              height={76}
              className="object-cover"
            />
            <Image
              src="/footerImages/footer2.png"
              alt="Image 2"
              width={76}
              height={76}
              className="object-cover"
            />
            <Image
              src="/footerImages/footer3.png"
              alt="Image 3"
              width={76}
              height={76}
              className="object-cover"
            />
            <Image
              src="/footerImages/footer4.png"
              alt="Image 4"
              width={76}
              height={76}
              className="object-cover"
            />
            <Image
              src="/footerImages/footer5.png"
              alt="Image 5"
              width={76}
              height={76}
              className="object-cover"
            />
            <Image
              src="/footerImages/footer6.png"
              alt="Image 6"
              width={76}
              height={76}
              className="object-cover"
            />
          </div>
          {/* contact column */}
          <div className="flex flex-col justify-center items-start lg:w-1/3 ">
            <div className="flex items-center mb-2">
              <span className="mr-4">
                <LocationIcon color="red" />
              </span>
              <p>F1/F3-02, ID.Market, Bhubaneswar</p>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-4">
                <MobileIcon color="red" />
              </span>
              <p>(+91) 9861250600</p>
            </div>
            <div className="flex items-center">
              <span className="mr-4">
                <EmailIcon color="red" />
              </span>
              <p>gajanana.driving@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 bg-black py-8 px-4">
        <p>
          &copy; Copyright Gajanan All Rights Reserved.{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
