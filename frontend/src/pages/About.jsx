import { motion as Motion } from "framer-motion";
import { useCallback } from "react";

import ceoPhoto from "../assets/ceo.jpg";

import {
  FaGem,
  FaTshirt,
  FaPalette,
  FaGlobe,
  FaLeaf,
  FaStar,
  FaHeart,
  FaAward,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext.jsx";

import en from "../translations/en.json";
import am from "../translations/am.json";

const translations = {
  EN: en,
  AM: am,
};

const About = () => {
  const { language } = useLanguage();

  const translate = useCallback(
    (text) => {
      return translations[language]?.[text] || text;
    },

    [language],
  );

  const values = [
    {
      icon: FaGem,

      title: translate("Premium Textile Selection"),

      desc: translate(
        "We carefully select high-quality chiffon fabrics that provide elegance, comfort, softness, and a luxurious appearance.",
      ),
    },

    {
      icon: FaPalette,

      title: translate("Creative Fashion Design"),

      desc: translate(
        "Our designs combine creativity, cultural identity, and modern fashion trends to create timeless pieces.",
      ),
    },

    {
      icon: FaTshirt,

      title: translate("Custom Fashion Experience"),

      desc: translate(
        "Every customer receives personalized fashion solutions created around their style, personality, and vision.",
      ),
    },

    {
      icon: FaGlobe,

      title: translate("Fashion Beyond Borders"),

      desc: translate(
        "Tesfa represents Ethiopian beauty and modern elegance for fashion lovers around the world.",
      ),
    },
  ];

  const services = [
    {
      icon: FaLeaf,

      title: translate("Luxury Chiffon Fabrics"),

      text: translate(
        "Premium chiffon materials selected for designers, creators, and customers who appreciate exceptional quality.",
      ),
    },

    {
      icon: FaStar,

      title: translate("Elegant Craftsmanship"),

      text: translate(
        "Every garment is created with attention to detail, precision finishing, and artistic dedication.",
      ),
    },

    {
      icon: FaHeart,

      title: translate("Fashion With Meaning"),

      text: translate(
        "Our clothing celebrates confidence, culture, individuality, and personal expression.",
      ),
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#181818]">
      {/* INTRO SECTION */}

      <section
        className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff7f9] via-white to-[#fff1e8] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#f9c9d9]/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-[#f5d9b8]/40 blur-3xl"
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
          className="relative mx-auto max-w-7xl rounded-[2rem] border border-white/80 bg-white/75 p-7 shadow-[0_24px_80px_-40px_rgba(80,30,50,0.28)] backdrop-blur sm:p-12 md:p-16"
        >
          <p
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#f2c7d5] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c52d62] sm:text-sm"
          >
            {translate("About Tesfa Chiffon")}
          </p>

          <h1
            className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl"
          >
            {translate("Creating Elegant Fashion")}

            <span
              className="mt-2 block font-serif font-medium italic text-[#c52d62]"
            >
              {translate("Inspired By Culture & Beauty")}
            </span>
          </h1>

          <p
            className="mt-8 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9"
          >
            {translate(
              "Tesfa Chiffon is a luxury Ethiopian fashion brand dedicated to creating elegant traditional dresses, modern fashion collections, and premium chiffon textile experiences.",
            )}

            <br />
            <br />

            {translate(
              "We believe fashion is more than clothing. It represents identity, confidence, creativity, and personal expression. Every creation reflects passion, artistry, and the timeless beauty of Ethiopian heritage.",
            )}
          </p>
        </Motion.div>
      </section>

      {/* FOUNDER SECTION */}

      <section
        className="bg-[#fff8fa] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div
          className="mx-auto grid max-w-7xl items-center gap-12 rounded-[2rem] border border-[#f5e4e9] bg-white p-6 shadow-[0_24px_80px_-48px_rgba(80,30,50,0.35)] sm:p-10 md:grid-cols-2 md:gap-16 md:p-14"
        >
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
            className="relative mx-auto w-full max-w-lg"
          >
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#f7ccda] to-[#f5dfc6]" />
            <img
              src={ceoPhoto}
              alt="Tesfa Chiffon founder"
              className="relative h-[420px] w-full rounded-[1.75rem] object-cover shadow-xl sm:h-[520px]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c52d62]">Tesfa Chiffon</p>
              <p className="mt-1 text-sm text-gray-600">{translate("Ethiopian heritage, thoughtfully reimagined.")}</p>
            </div>
          </Motion.div>

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
          >
            <p
              className="inline-flex rounded-full bg-[#fff0f4] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c52d62]"
            >
              {translate("Founder & CEO")}
            </p>

            <h2
              className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              {translate("Tesfa")}
            </h2>

            <p
              className="mt-6 text-base leading-8 text-gray-600 sm:text-lg"
            >
              {translate(
                "Tesfa Chiffon is led by a clear creative vision: bringing Ethiopian heritage and contemporary fashion together with confidence and care.",
              )}
            </p>

            <p
              className="mt-5 text-base leading-8 text-gray-600 sm:text-lg"
            >
              {translate(
                "Every design celebrates individuality, thoughtful craftsmanship, and the beauty of dressing in a way that feels truly your own.",
              )}
            </p>

            <p
              className="mt-5 border-l-2 border-[#e8a5bb] pl-5 text-base font-medium leading-8 text-gray-700 sm:text-lg"
            >
              {translate(
                "Tesfa's vision is to create fashion experiences where every customer feels confident, elegant, and connected to their identity.",
              )}
            </p>
          </Motion.div>
        </div>
      </section>
      {/* ================= MISSION & VISION ================= */}

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <div
          className="grid gap-6 md:grid-cols-2"
        >
          {/* MISSION */}

          <div
            className="rounded-[1.75rem] border border-[#f2e5e9] bg-gradient-to-br from-[#2d1d27] to-[#171217] p-8 text-white shadow-lg sm:p-10"
          >
            <FaAward
              className="mb-6 rounded-2xl bg-white/10 p-3 text-3xl text-pink-300"
            />

            <h3
              className="
text-3xl
font-bold
mb-5
"
            >
              {translate("Our Mission")}
            </h3>

            <p
              className="
text-gray-300
leading-relaxed
"
            >
              {translate(
                "To create exceptional fashion pieces that combine premium fabrics, traditional Ethiopian elegance, and modern creativity while delivering unforgettable customer experiences.",
              )}
            </p>
          </div>

          {/* VISION */}

          <div
            className="rounded-[1.75rem] border border-[#f2dce4] bg-gradient-to-br from-[#fff0f5] to-[#fffaf5] p-8 shadow-sm sm:p-10"
          >
            <FaGem
              className="mb-6 rounded-2xl bg-white p-3 text-3xl text-[#c52d62] shadow-sm"
            />

            <h3
              className="
text-3xl
font-bold
mb-5
"
            >
              {translate("Our Vision")}
            </h3>

            <p
              className="
text-gray-600
leading-relaxed
"
            >
              {translate(
                "To become a globally recognized fashion house representing Ethiopian beauty, luxury textile excellence, and innovative contemporary design.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}

      <section
        className="bg-[#fff9fb] py-20 sm:py-28"
      >
        <div
          className="
max-w-7xl
mx-auto
px-5
sm:px-8
"
        >
          <div
            className="
text-center
mb-16
"
          >
            <h2
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              {translate("What Makes")}

              <span
                className="text-[#c52d62]"
              >
                {" "}
                {translate("Tesfa Different")}
              </span>
            </h2>
          </div>

          <div
            className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-7
"
          >
            {values.map((item, index) => (
              <Motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="h-full rounded-[1.5rem] border border-[#f1e7ea] bg-white p-7 shadow-sm transition-shadow hover:shadow-xl sm:p-8"
              >
                <item.icon
                  className="mb-6 rounded-2xl bg-[#fff0f4] p-3 text-3xl text-[#c52d62]"
                />

                <h3
                  className="
text-xl
font-bold
mb-4
"
                >
                  {item.title}
                </h3>

                <p
                  className="
text-gray-600
leading-relaxed
"
                >
                  {item.desc}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <div
          className="grid gap-5 md:grid-cols-3"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-[1.5rem] border border-[#f1e7ea] bg-white p-7 shadow-sm transition-shadow hover:shadow-xl sm:p-8"
            >
              <item.icon
                className="mb-5 rounded-2xl bg-[#fff0f4] p-3 text-3xl text-[#c52d62]"
              />

              <h3
                className="
text-2xl
font-bold
mb-4
"
              >
                {item.title}
              </h3>

              <p
                className="
text-gray-600
leading-relaxed
"
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section
        className="bg-[#211820] px-5 py-20 text-center text-white sm:py-28"
      >
        <h2
          className="
text-4xl
md:text-6xl
font-bold
"
        >
          {translate("Experience The Beauty")}

          <span
            className="block font-serif font-medium italic text-[#f4b6ca]"
          >
            {translate("Of Tesfa Chiffon")}
          </span>
        </h2>

        <p
          className="
max-w-2xl
mx-auto
mt-6
text-lg
"
        >
          {translate(
            "Discover elegant collections, custom designs, and premium chiffon fashion created with passion.",
          )}
        </p>

        <a
          href="/gallery"
          className="mt-10 inline-block rounded-full bg-white px-10 py-4 font-bold text-[#c52d62] transition hover:scale-105"
        >
          {translate("Explore Collection")}
        </a>
      </section>
    </main>
  );
};

export default About;
