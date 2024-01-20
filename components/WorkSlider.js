import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { workSlides } from '../constants.js';
import Image from 'next/image';
import Link from 'next/link';

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
      className="w-11/12 h-[240px] lg:max-w-10/12 md:h-[400px]"
    >
      {workSlides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative rounded-lg bg-slate-200 cursor-pointer group">
              <Link
                href={{
                  pathname: '/work/[workId]',
                  query: { workId: index + 1 },
                }}
              >
                <Image
                  src={slide.path}
                  alt=""
                  width={400}
                  height={300}
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
