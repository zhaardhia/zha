import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import Image from 'next/image';

type SwiperDemoType = {
  src: string[]
}
const SwiperDemoSoftware: React.FC<SwiperDemoType> = ({ src }) => {
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
      {src.map((source) => {
        return (
          <SwiperSlide className="mx-auto">
            <Image src={source} alt={'swiper demo'} width={400} height={200} className="mx-auto py-10 rounded-lg" />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default SwiperDemoSoftware
