import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import Image from 'next/image';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="my-10"

    >
      <SwiperSlide className="mx-auto">
        <Image src="/main-software-project/mertapadaBanner.png" alt={'mertapada wkb'} width={500} height={500} className="mx-auto py-10 rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/main-software-project/lsmBanner.png" alt={'mertapada wkb'} width={500} height={500} className="mx-auto py-10 rounded-3xl" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/main-software-project/fokusBanner.png" alt={'mertapada wkb'} width={500} height={500} className="mx-auto py-10" />
      </SwiperSlide>
      <SwiperSlide>
      < Image src="/main-software-project/mondaBanner.png" alt={'mertapada wkb'} width={500} height={500} className="mx-auto py-10" />
      </SwiperSlide>
    </Swiper>
  );
};