import React from "react";
import Container from "./Container";
import { Pagination } from "swiper/modules";
import { SwiperSlide,Swiper } from "swiper/react";

const Slider = () => {
  const videoSlides = [
    {
      src: "/projects/whatwedo/white_suit.mp4",
      label: "Custom Tailored Suits",
      avatar:
        "https://images.unsplash.com/photo-1750797490751-1fc372fdcf88?q=80&w=64&auto=format&fit=crop",
    },
    {
      src: "/projects/whatwedo/black_suit.mp4",
      label: "Majestic",
      avatar:
        "https://images.unsplash.com/photo-1750797490751-1fc372fdcf88?q=80&w=64&auto=format&fit=crop",
    },
    {
      src: "/projects/whatwedo/video.mp4",
      label: "Goombah - The Bar",
      avatar:
        "https://images.unsplash.com/photo-1750797490751-1fc372fdcf88?q=80&w=64&auto=format&fit=crop",
    },
    {
      src: "/projects/whatwedo/shwemyodaw.mp4",
      label: "Shwe Myot Taw",
      avatar:
        "https://images.unsplash.com/photo-1750797490751-1fc372fdcf88?q=80&w=64&auto=format&fit=crop",
    },
    {
      src: "/projects/whatwedo/feelmini.mp4",
      label: "Feel Thailand",
      avatar:
        "https://images.unsplash.com/photo-1750797490751-1fc372fdcf88?q=80&w=64&auto=format&fit=crop",
    },
  ];
  return (
    <Container>
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2F7CC2] to-[#082274] px-4 py-24 text-white text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <div class="text-center mb-6">
            <p class="text-lg font-semibold text-white">
              <span class="border-b-2 border-primary">Our Services</span>
            </p>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Reels That Speak Your Brand
          </h2>
          <p class="text-base md:text-lg text-blue-100">
            We create visual stories that stop scrolls, spark emotions, and
            dominate feeds. Blending cutting-edge trends with cinematic
            craftsmanship, and delivering premium content for brands.
          </p>
        </div>
        <div className=" w-full px-4 md:px-8">
          <div className="">
            <div className=" flex flex-row w-full rounded-lg border border-black max-w-6xl mx-auto px-4 py-12">
              <Swiper
                spaceBetween={30}
                slidesPerView={1.25}
                breakpoints={{
                  768: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 3.5 },
                }}
                Pagination={{
                  clickable: true,
                  bulletClass: "dash-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                modules={[Pagination]}
                className="swiper"
              >
                {videoSlides.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative rounded-2xl overflow-hidden group transition-transform">
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-[450px] md:h-[550px] object-cover"
                      />
                      <div className="absolute bottom-0 inset-x-0 p-4 flex justify-between items-center bg-gradient-to-t from-black/60 via-black/10 to-transparent">
                        <div className="flex items-center space-x-2">
                          <img
                            src={item.avatar}
                            alt={item.label}
                            className="rounded-full object-cover w-6 h-6"
                          />
                          <span className="font-semibold text-white text-sm">
                            {item.label}
                          </span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-heart text-white opacity-80"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination Styling */}
              <style>{`
        .swiper .dash-bullet {
          background: #ccc;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          display: inline-block;
          margin: 0 4px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .swiper .swiper-pagination-bullet-active {
          background: #fff !important;
          width: 12px;
          height: 12px;
          opacity: 1;
        }
      `}</style>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Slider;
