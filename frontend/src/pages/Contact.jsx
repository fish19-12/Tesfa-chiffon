import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
} from "react-icons/fa";

import { motion as Motion } from "framer-motion";
import { useCallback } from "react";

import { useLanguage } from "../context/LanguageContext.jsx";

import en from "../translations/en.json";
import am from "../translations/am.json";

const translations = {
  EN: en,
  AM: am,
};

const Contact = () => {
  const { language } = useLanguage();

  const translate = useCallback(
    (text) => {
      return translations[language]?.[text] || text;
    },
    [language],
  );

  const contactItems = [
    {
      icon: <FaPhone />,

      title: "Phone",

      content: "0993629172",

      bg: "bg-[#FFE6EE]",

      color: "text-[#FF2D6F]",
    },

    {
      icon: <FaWhatsapp />,

      title: "WhatsApp",

      content: "Chat With Designer",

      bg: "bg-green-100",

      color: "text-green-600",
    },

    {
      icon: <FaInstagram />,

      title: "Instagram",

      content: "Tesfa Chiffon",

      bg: "bg-pink-100",

      color: "text-pink-500",
    },

    {
      icon: <FaMapMarkerAlt />,

      title: "Studio Location",

      content: "22 Dria Mall, 1st Floor, Shop No. 101",

      bg: "bg-[#FFE6EE]",

      color: "text-[#FF2D6F]",
    },

    {
      icon: <FaClock />,

      title: "Opening Hours",

      content: "Daily: 9:00 AM - 8:00 PM",

      bg: "bg-[#FFE6EE]",

      color: "text-[#FF2D6F]",
    },
  ];

  return (
    <div
      className="min-h-screen overflow-hidden bg-[#fff9fb] text-[#1A1A1A]"
    >
      {/* ================= HERO ================= */}

      <section
        className="relative px-5 pb-14 pt-20 sm:pb-16 sm:pt-24"
      >
        <div
          className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f8cbd9]/45 blur-3xl"
        />

        <Motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#c52d62]"
          >
            {translate("Tesfa Chiffon")}
          </p>

          <h1
            className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            {translate("Contact Our")}

            <span
              className="mt-1 block font-serif font-medium italic text-[#c52d62]"
            >
              {translate("Fashion Studio")}
            </span>
          </h1>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6B7280] sm:text-base"
          >
            {translate(
              "Get in touch with Tesfa Chiffon about custom designs, collections, and appointments.",
            )}
          </p>
        </Motion.div>
      </section>
      {/* ================= CONTACT CONTENT ================= */}

      <section
        className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]"
      >
        {/* INFORMATION CARD */}

        <Motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="rounded-[1.75rem] border border-[#f0e3e8] bg-white p-6 shadow-[0_24px_80px_-48px_rgba(80,30,50,0.4)] sm:p-9"
        >
          <div
            className="mb-7"
          >
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              {translate("Get In Touch")}
            </h2>

            <p
              className="mt-2 text-sm leading-6 text-[#6B7280] sm:text-base"
            >
              {translate(
                "We would love to help you create your perfect fashion design.",
              )}
            </p>
          </div>

          <div
            className="grid gap-3 sm:grid-cols-2"
          >
            {contactItems.map((item, index) => (
              <Motion.div
                key={index}
                whileHover={{
                  x: 8,
                }}
                className="flex items-center gap-4 rounded-2xl border border-[#f1e8ec] bg-white p-4 transition hover:border-[#e7b6c6] hover:bg-[#fffafd]"
              >
                <div
                  className={`
h-12
w-12
shrink-0
rounded-2xl
flex
items-center
justify-center
text-xl
${item.bg}
${item.color}
`}
                >
                  {item.icon}
                </div>

                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]"
                  >
                    {translate(item.title)}
                  </p>

                  <p
                    className="mt-1 text-sm font-semibold leading-5 sm:text-base"
                  >
                    {typeof item.content === "string"
                      ? translate(item.content)
                      : item.content}
                  </p>
                </div>
              </Motion.div>
            ))}
          </div>

          {/* ACTION BUTTONS */}

          <div
            className="mt-7 grid gap-3 sm:grid-cols-2"
          >
            <a
              href="tel:0993629172"
              className="flex items-center justify-center gap-3 rounded-full bg-[#c52d62] py-3.5 font-semibold text-white transition hover:bg-[#a92353]"
            >
              <FaPhone />

              {translate("Call Now")}
            </a>

            <a
              href="https://wa.me/251993629172"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-[#238a59] py-3.5 font-semibold text-white transition hover:bg-[#1b7048]"
            >
              <FaWhatsapp />

              {translate("WhatsApp")}
            </a>
          </div>
        </Motion.div>

        {/* ================= MAP ================= */}

        <Motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="min-h-[420px] overflow-hidden rounded-[1.75rem] border border-[#f0e3e8] bg-white shadow-[0_24px_80px_-48px_rgba(80,30,50,0.4)] lg:min-h-[540px]"
        >
          <iframe
            title="Tesfa Location"
            className="h-full min-h-[420px] w-full lg:min-h-[540px]"
            src="
https://maps.google.com/maps?q=22%20Dria%20Mall%2C%20Addis%20Ababa&t=&z=16&ie=UTF8&iwloc=&output=embed
"
            loading="lazy"
          />
        </Motion.div>
      </section>
    </div>
  );
};

export default Contact;
