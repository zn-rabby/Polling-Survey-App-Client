import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState();

  useEffect(() => {
    fetch("/avarter.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="bg-slate-50 mt-10 rounded p-2">
      <div className="md:p-10 max-w-7xl mx-auto">
        <h1 className="md:text-5xl text-3xl font-semibold text-center m-4 my-8  border-b-2 border-dark-03 p-2 md:w-96 w-72 mx-auto">
          Our Testimonials
        </h1>
        <div className="">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {testimonials?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="w-full md:w-3/5 mx-auto p-6">
                  <div className="mx-auto w-28">
                    <img
                      className="w-28 rounded-full h-28 object-cover border-2 border-dark-01 p-1"
                      src={item?.avatar}
                      alt=""
                    />
                  </div>
                  <p className="text-center pt-2">{item.testimonial}</p>
                  <div className="text-center">
                    <h6 className="text-lg mt-3 font-semibold text-dark-01">
                      Name: {item?.customer?.name}
                    </h6>
                    <h6 className="text-lg mt-3 font-semibold text-dark-01">
                      Position: {item?.customer?.position}
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
