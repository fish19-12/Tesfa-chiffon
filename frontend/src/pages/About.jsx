import { motion } from "framer-motion";
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

const About = () => {
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
    <main className="bg-white text-[#181818] overflow-hidden">
      {/* INTRO SECTION */}

      <section
        className="
max-w-7xl
mx-auto
px-5
sm:px-8
pt-24
pb-20
"
      >
        <motion.div
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
          className="max-w-4xl"
        >
          <p
            className="
uppercase
tracking-[0.4em]
text-sm
font-semibold
text-[#E91E63]
mb-6
"
          >
            {translate("About Tesfa Chiffon")}
          </p>

          <h1
            className="
text-4xl
sm:text-5xl
md:text-6xl
font-bold
leading-tight
"
          >
            {translate("Creating Elegant Fashion")}

            <span
              className="
block
text-[#E91E63]
"
            >
              {translate("Inspired By Culture & Beauty")}
            </span>
          </h1>

          <p
            className="
mt-8
text-lg
md:text-xl
leading-relaxed
text-gray-600
"
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
        </motion.div>
      </section>

      {/* FOUNDER SECTION */}

      <section
        className="
bg-[#FFF4F7]
py-20
"
      >
        <div
          className="
max-w-7xl
mx-auto
px-5
sm:px-8
grid
md:grid-cols-2
gap-14
items-center
"
        >
          <motion.div
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
            className="flex justify-center"
          >
            <img
              src={ceoPhoto}
              alt="Zubiyda Zeyinu Founder and CEO"
              className="
w-full
max-w-md
h-[520px]
object-cover
rounded-[40px]
shadow-2xl
"
            />
          </motion.div>

          <motion.div
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
              className="
uppercase
tracking-widest
text-sm
text-[#E91E63]
font-semibold
"
            >
              {translate("Founder & CEO")}
            </p>

            <h2
              className="
mt-4
text-4xl
md:text-5xl
font-bold
"
            >
              Zubeyda Zeyinu
            </h2>

            <p
              className="
mt-6
text-gray-600
text-lg
leading-relaxed
"
            >
              {translate(
                "Zubeyda Zeyinu is the founder and CEO of Tesfa Chiffon, a visionary fashion entrepreneur passionate about celebrating beauty, culture, and creativity through clothing.",
              )}
            </p>

            <p
              className="
mt-5
text-gray-600
text-lg
leading-relaxed
"
            >
              {translate(
                "Through dedication and artistic leadership, she built Tesfa into a brand that represents elegance, confidence, and the beauty of Ethiopian fashion.",
              )}
            </p>

            <p
              className="
mt-5
text-gray-600
text-lg
leading-relaxed
"
            >
              {translate(
                "Her vision is to create fashion experiences where every customer feels unique, confident, and connected to their identity.",
              )}
            </p>
          </motion.div>
        </div>
      </section>
      {/* ================= MISSION & VISION ================= */}

      <section
        className="
max-w-7xl
mx-auto
px-5
sm:px-8
py-24
"
      >
        <div
          className="
grid
md:grid-cols-2
gap-8
"
        >
          {/* MISSION */}

          <div
            className="
p-10
rounded-3xl
bg-black
text-white
"
          >
            <FaAward
              className="
text-4xl
text-pink-400
mb-6
"
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
            className="
p-10
rounded-3xl
bg-[#FFE8F0]
"
          >
            <FaGem
              className="
text-4xl
text-pink-600
mb-6
"
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
        className="
bg-[#FFF8FA]
py-24
"
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
              className="
text-4xl
md:text-5xl
font-bold
"
            >
              {translate("What Makes")}

              <span
                className="
text-[#E91E63]
"
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
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="
bg-white
rounded-3xl
p-8
shadow-lg
border
border-gray-100
"
              >
                <item.icon
                  className="
text-4xl
text-[#E91E63]
mb-6
"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section
        className="
py-24
max-w-7xl
mx-auto
px-5
sm:px-8
"
      >
        <div
          className="
grid
md:grid-cols-3
gap-8
"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="
p-8
rounded-3xl
border
shadow-sm
"
            >
              <item.icon
                className="
text-4xl
text-[#E91E63]
mb-5
"
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
        className="
py-24
bg-gradient-to-r
from-[#E91E63]
to-[#F59E0B]
text-white
text-center
px-5
"
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
            className="
block
"
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
          className="
inline-block
mt-10
bg-white
text-[#E91E63]
px-10
py-4
rounded-full
font-bold
hover:scale-105
transition
"
        >
          {translate("Explore Collection")}
        </a>
      </section>
    </main>
  );
};

export default About;
