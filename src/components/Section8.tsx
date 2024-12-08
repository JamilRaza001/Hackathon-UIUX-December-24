import Image from "next/image";
import { IoMdPlay } from "react-icons/io";

const RestaurantProcess = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/section8_1.png" // Replace with your image path
          alt="Food Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 flex items-center h-full">
        <div className="w-full lg:w-1/2 ml-auto space-y-6">
          {/* Subheading */}
          <h4 className="text-[#FF9F0D] text-lg font-medium italic text-right">
            Restaurant Active Process
          </h4>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-right">
            <span className="text-[#FF9F0D]">We</span> Document Every Food{" "}
            <br />
            Bean Process until it is saved
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg text-right leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna.
          </p>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button className="px-6 py-2 border-2 border-[#FF9F0D] text-white font-semibold rounded-full hover:bg-[#FF9F0D] hover:text-black transition-all">
              Read More
            </button>
            <button className="px-6 py-2 flex items-center gap-2 bg-[#FF9F0D] text-black font-semibold rounded-full hover:bg-transparent hover:text-white hover:border-2 hover:border-[#FF9F0D] transition-all">
              <span>Play Video</span>
              <IoMdPlay className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantProcess;
