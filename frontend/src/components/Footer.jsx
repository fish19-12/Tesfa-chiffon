import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-[#f1e4e9] bg-white text-[#1A1A1A]">
    <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr] md:items-center md:py-12">
      <div>
        <Link
          to="/"
          className="inline-flex items-baseline gap-2"
          aria-label="Tesfa Chiffon home"
        >
          <span className="text-2xl font-bold tracking-[0.16em]">TESFA</span>
          <span className="text-sm font-semibold tracking-[0.24em] text-[#c52d62]">
            CHIFFON
          </span>
        </Link>
        <p className="mt-3 max-w-md text-sm leading-6 text-[#6B7280]">
          Chiffon and custom fashion, thoughtfully made for you.
        </p>
        <Link
          to="/gallery"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#c52d62] transition hover:gap-3"
        >
          Explore collections <FaArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:justify-self-end">
        <a
          href="tel:0993629172"
          className="flex min-w-0 items-center gap-3 rounded-2xl border border-[#f1e4e9] px-4 py-3 transition hover:border-[#e7b6c6] hover:bg-[#fffafd]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f4] text-[#c52d62]">
            <FaPhone aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs font-medium uppercase tracking-wide text-[#6B7280]">
              Call Tesfa
            </span>
            <span className="mt-1 block font-semibold">0993629172</span>
          </span>
        </a>

        <a
          href="https://wa.me/251993629172"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 items-center gap-3 rounded-2xl border border-[#f1e4e9] px-4 py-3 transition hover:border-[#b8dfcb] hover:bg-[#f7fcf9]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e9f7ef] text-[#238a59]">
            <FaWhatsapp aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs font-medium uppercase tracking-wide text-[#6B7280]">
              WhatsApp
            </span>
            <span className="mt-1 block font-semibold">Chat with us</span>
          </span>
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=22+Dria+Mall%2C+Addis+Ababa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-[#f1e4e9] px-4 py-3 transition hover:border-[#e7b6c6] hover:bg-[#fffafd] sm:col-span-2"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f4] text-[#c52d62]">
            <FaMapMarkerAlt aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs font-medium uppercase tracking-wide text-[#6B7280]">
              Visit our studio
            </span>
            <span className="mt-1 block font-semibold">
              22 bedrya Mall, 1st Floor, Shop No. 101
            </span>
          </span>
        </a>
      </div>
    </div>

    <div className="border-t border-[#f1e4e9] px-5 py-4 text-center text-xs text-[#6B7280] sm:px-8">
      © {new Date().getFullYear()} Tesfa Chiffon. All rights reserved.
    </div>
  </footer>
);

export default Footer;
