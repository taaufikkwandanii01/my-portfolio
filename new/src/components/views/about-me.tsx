import Image from "next/image";

const AboutView = () => {
  return (
    <>
      <section
        id="about"
        className="w-full min-h-screen flex items-center py-10 pt-20 px-3 md:px-8 bg-blue-950"
      >
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-evenly gap-5">
            <div className="flex flex-col items-start md:w-2/3 animate__animated animate__fadeInLeft">
              <h1 className="text-white font-extrabold text-2xl md:text-5xl lg:text-6xl">
                TAUFIK WANDANI
              </h1>
              <h2 className="text-white font-extrabold text-base md:text-lg mb-3">
                Undergraduate Informatics Engineering
              </h2>
              <p className="text-white text-sm md:text-base lg:text-lg text-justify mb-2">
                Saya adalah lulusan Teknik Informatika dari Universitas Komputer
                Indonesia. Saya memiliki keterampilan dalam pengembangan
                Perangkat Lunak maupun Perangkat Keras. Dalam pengembangan
                perangkat lunak, saya memiliki pengalaman dalam membangun sebuah
                web application dan mobile application yang telah memperkuat
                keterampilan teknis saya. Sedangkan dalam keterampilan perangkat
                keras, saya memiliki pemahaman mengenai perakitan,
                troubleshooting, serta pemeliharaan sistem komputer yang
                mendukung kinerja perangkat. Dengan latar belakang tersebut,
                saya bertujuan untuk berkontribusi secara profesional di
                Industri Teknologi sekaligus terus meningkatkan dan
                mengembangkan keterampilan saya.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/Icons/favicon.png"
                alt="Personal Icon"
                width={260} // Tambahkan ini
                height={260} // Tambahkan ini
                className="w-[260px] h-[260px] object-cover rounded-full shadow-[0_0_40px_#93c5fd]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutView;
