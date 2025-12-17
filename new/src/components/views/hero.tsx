import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Image from "next/image";
import { Link } from "react-router-dom";

const expertise = [
  {
    id: 1,
    src: "/images/Expertise/html.png",
    alt: "",
  },
  {
    id: 2,
    src: "/images/Expertise/css.png",
    alt: "",
  },
];

const HeroView = () => {
  return (
    <>
      <section
        id="hero"
        className="relative w-full h-[100dvh] flex items-center justify-center px-3 md:px-8 bg-[#2D5C88]/30"
      >
        <div className="container">
          <div className="w-full mx-auto z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl uppercase">
                Taufik Wandani
              </h1>
              <h2 className="font-mono font-bold text-lg md:text-2xl lg:text-3xl text-blue-300 animate__animated  animate__bounceInUp">
                Undergraduate Informatics Engineering
              </h2>
            </div>

            <div className="hidden md:block w-full overflow-hidden mt-20">
              <div className="relative flex items-center justify-center">
                <div className="bg-transparent">
                  <MdKeyboardDoubleArrowLeft className="size-6" />
                </div>

                <div className="w-full max-w-md overflow-hidden">
                  <div className="flex gap-6 animate-marquee whitespace-nowrap">
                    {expertise.map((item) => (
                      <Image
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        width="50"
                        height="50"
                        className="object-contain pointer-events-none"
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-transparent">
                  <MdKeyboardDoubleArrowRight className="size-6" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50">
            <a href="#about" className="group">
              <div className="w-10 h-20 flex flex-col items-center justify-end rounded-full shadow-[0_0_10px_#93c5fd] border-2 border-blue-300">
                <MdKeyboardDoubleArrowDown className="size-7 text-blue animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroView;
