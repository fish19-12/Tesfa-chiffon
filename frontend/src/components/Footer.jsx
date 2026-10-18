import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaArrowRight,
  FaFacebook,
} from "react-icons/fa";

import { SiTiktok } from "react-icons/si";

import { Link } from "react-router-dom";

import { useCallback } from "react";

import { useLanguage } from "../context/LanguageContext.jsx";

import en from "../translations/en.json";
import am from "../translations/am.json";

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    EN: en,
    AM: am,
  };

  const translate = useCallback(
    (text) => {
      return translations[language]?.[text] || text;
    },
    [language],
  );

  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-white
      text-[#1A1A1A]
      border-t
      border-[#E5E7EB]
      "
    >
      <div
        className="
        absolute
        -top-32
        -right-32
        w-[420px]
        h-[420px]
        rounded-full
        bg-[#FFE6EE]
        blur-[120px]
        "
      />

      <div
        className="
        absolute
        bottom-0
        -left-32
        w-[350px]
        h-[350px]
        rounded-full
        bg-[#FF2D6F]/10
        blur-[120px]
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-5
        sm:px-8
        py-16
        md:py-20
        "
      >
        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          md:gap-12
          "
        >
          {/* BRAND */}

          <div>
            <h2
              className="
text-3xl
md:text-4xl
font-bold
tracking-[4px]
text-[#1A1A1A]
"
            >
              TESFA
            </h2>

            <p
              className="
mt-2
tracking-[5px]
text-sm
font-medium
text-[#FF2D6F]
"
            >
              CHIFFON
            </p>

            <p
              className="
mt-6
text-sm
leading-relaxed
text-[#6B7280]
"
            >
              {translate(
                "A premium fashion house specializing in luxury chiffon clothing, traditional designs, custom-made outfits, and high-quality textile materials.",
              )}
            </p>

            <div
              className="
flex
flex-wrap
gap-3
mt-6
"
            >
              <span
                className="
px-4
py-2
rounded-full
bg-[#FFE6EE]
text-[#FF2D6F]
text-xs
font-medium
"
              >
                {translate("Luxury Fabrics")}
              </span>

              <span
                className="
px-4
py-2
rounded-full
bg-[#FFE6EE]
text-[#FF2D6F]
text-xs
font-medium
"
              >
                {translate("Custom Fashion")}
              </span>

              <span
                className="
px-4
py-2
rounded-full
bg-[#FFE6EE]
text-[#FF2D6F]
text-xs
font-medium
"
              >
                {translate("Traditional Wear")}
              </span>
            </div>
          </div>
          {/* ================= CONTACT ================= */}

          <div>
            <h3
              className="
text-xl
font-bold
mb-7
"
            >
              {translate("Contact Boutique")}
            </h3>

            <div
              className="
space-y-6
"
            >
              {/* PHONE */}

              <div
                className="
flex
gap-4
items-center
"
              >
                <div
                  className="
w-11
h-11
rounded-full
bg-[#FFE6EE]
flex
items-center
justify-center
text-[#FF2D6F]
shrink-0
"
                >
                  <FaPhone />
                </div>

                <div>
                  <p
                    className="
text-xs
uppercase
tracking-wider
text-[#6B7280]
"
                  >
                    {translate("Phone")}
                  </p>

                  <a
                    href="tel:+251975700510"
                    className="
hover:text-[#FF2D6F]
transition
"
                  >
                    +251 912441059
                  </a>
                </div>
              </div>

              {/* LOCATION */}

              <div
                className="
flex
gap-4
items-start
"
              >
                <div
                  className="
w-11
h-11
rounded-full
bg-[#FFE6EE]
flex
items-center
justify-center
text-[#FF2D6F]
shrink-0
"
                >
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p
                    className="
text-xs
uppercase
tracking-wider
text-[#6B7280]
"
                  >
                    {translate("Studio Location")}
                  </p>

                  <p>{translate("Addis Ababa, Ethiopia")}</p>
                </div>
              </div>

              {/* WORKING HOURS */}

              <div
                className="
flex
gap-4
items-center
"
              >
                <div
                  className="
w-11
h-11
rounded-full
bg-[#FFE6EE]
flex
items-center
justify-center
text-[#FF2D6F]
shrink-0
"
                >
                  <FaClock />
                </div>

                <div>
                  <p
                    className="
text-xs
uppercase
tracking-wider
text-[#6B7280]
"
                  >
                    {translate("Working Hours")}
                  </p>

                  <p>{translate("Daily 9:00 AM - 8:00 PM")}</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="
mt-7
inline-flex
items-center
gap-2
text-[#FF2D6F]
font-semibold
text-sm
hover:gap-4
transition-all
"
            >
              {translate("Visit Studio")}

              <FaArrowRight />
            </a>
          </div>

          {/* ================= SOCIAL ================= */}

          <div>
            <h3
              className="
text-xl
font-bold
mb-7
"
            >
              {translate("Follow Us")}
            </h3>

            <p
              className="
text-sm
leading-relaxed
text-[#6B7280]
mb-6
"
            >
              {translate(
                "Follow our latest collections, fashion inspiration, and exclusive designs.",
              )}
            </p>

            <div
              className="
flex
flex-wrap
gap-4
"
            >
              <a
                href="#"
                className="
group
w-12
h-12
rounded-full
bg-white
border
border-[#E5E7EB]
flex
items-center
justify-center
text-[#FF2D6F]
shadow-sm
hover:bg-[#FF2D6F]
hover:text-white
hover:-translate-y-1
transition
"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="#"
                className="
group
w-12
h-12
rounded-full
bg-white
border
border-[#E5E7EB]
flex
items-center
justify-center
text-[#FF2D6F]
shadow-sm
hover:bg-[#FF2D6F]
hover:text-white
hover:-translate-y-1
transition
"
              >
                <FaWhatsapp className="text-lg" />
              </a>

              <a
                href="#"
                className="
group
w-12
h-12
rounded-full
bg-white
border
border-[#E5E7EB]
flex
items-center
justify-center
text-[#FF2D6F]
shadow-sm
hover:bg-[#FF2D6F]
hover:text-white
hover:-translate-y-1
transition
"
              >
                <SiTiktok className="text-lg" />
              </a>

              <a
                href="#"
                className="
group
w-12
h-12
rounded-full
bg-white
border
border-[#E5E7EB]
flex
items-center
justify-center
text-[#FF2D6F]
shadow-sm
hover:bg-[#FF2D6F]
hover:text-white
hover:-translate-y-1
transition
"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>

            <div
              className="
mt-8
p-5
rounded-3xl
bg-[#FFE6EE]
border
border-[#E5E7EB]
"
            >
              <p
                className="
text-sm
font-semibold
text-[#1A1A1A]
"
              >
                {translate("Luxury Fashion Experience")}
              </p>

              <p
                className="
mt-2
text-xs
text-[#6B7280]
leading-relaxed
"
              >
                {translate(
                  "Creating elegant chiffon collections with timeless beauty and premium craftsmanship.",
                )}
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
mt-16
pt-8
border-t
border-[#E5E7EB]
flex
flex-col
md:flex-row
justify-between
items-center
gap-5
text-center
"
        >
          <p
            className="
text-sm
text-[#6B7280]
"
          >
            {translate("© 2026 Tesfa Chiffon. All Rights Reserved.")}
          </p>

          <p
            className="
text-xs
text-[#9CA3AF]
max-w-xl
"
          >
            {translate(
              "Luxury chiffon fashion, traditional clothing, custom designs, and premium textile materials crafted with elegance and creativity.",
            )}
          </p>
        </div>
      </div>

      <div
        className="
h-20
md:hidden
"
      />
    </footer>
  );
};

export default Footer;
