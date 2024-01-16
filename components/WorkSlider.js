import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';

import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

// data
const workSlides = [
  {
    title: 'PokecardDex',
    path: '/pokecard-dex.vercel.app.jpeg',
    link: 'https://pokecard-dex.vercel.app',
  },
  {
    title: 'Bookshelf App',
    path: '/BookshelfApp.jpg',
    link: 'https://mybookshelfapp.vercel.app/',
  },
  {
    title: 'Pohon Tautanku',
    path: '/pohontautanku.jpg',
    link: 'https://helmiainun-link3.netlify.app/',
  },
  {
    title: 'Gradient Color Generator',
    path: '/gradient-color-generator.jpg',
    link: 'https://another-gradients-generator.netlify.app/',
  },
];
const WorkSlider = () => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#f13024',
        '--swiper-pagination-color': '#f13024',
        '--swiper-navigation-size': '30px',
      }}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="w-11/12 h-[240px] lg:w-10/12 md:h-[400px]"
    >
      {workSlides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative rounded-lg bg-slate-200 cursor-pointer group">
              <Link href={slide.link} target="_blank">
                <Image
                  src={slide.path}
                  alt=""
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </Link>
              <div className="block lg:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-200 to-transparent transition-all duration-300 ease-in md:group-hover:block">
                <h3 className="text-lg font-semibold py-2">{slide.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
