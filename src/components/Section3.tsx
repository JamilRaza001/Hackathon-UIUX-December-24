import Image from "next/image";
import { FaHamburger, FaPizzaSlice, FaWineGlass } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <div className="bg-black text-white py-12 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {/* First Column */}
          <div className="space-y-4">
            <Image
              src="/images/section3_1.png"
              alt="Tacos"
              width={500}
              height={500}
              className="rounded-lg w-full object-cover"
            />
            <Image
              src="/images/section3_3.png"
              alt="Fried Chicken"
              width={500}
              height={500}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <Image
              src="/images/section3_2.png"
              alt="Burger"
              width={500}
              height={500}
              className="rounded-lg w-full object-cover"
            />
            <Image
              src="/images/section3_4.png"
              alt="Cheeseburger"
              width={500}
              height={500}
              className="rounded-lg w-full object-cover"
            />
            <Image
              src="/images/section3_5.png"
              alt="Salad"
              width={500}
              height={500}
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Right Section: Text and Icons */}
        <div className="text-center md:text-left">
          <h2 className="text-[#FF9F0D] text-lg font-bold">Why Choose Us</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            <span className="text-[#FF9F0D]">Extra</span>ordinary Taste <br />
            And Experienced
          </h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>

          {/* Icon Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
            <div className="text-center bg-[#FF9F0D] flex flex-col justify-center items-center rounded-lg w-28 h-28">
              <FaHamburger className="text-white text-4xl" />
              <p className="text-white mt-2">Fast Food</p>
            </div>
            <div className="text-center bg-[#FF9F0D] flex flex-col justify-center items-center rounded-lg w-28 h-28">
              <FaPizzaSlice className="text-white text-4xl" />
              <p className="text-white mt-2">Lunch</p>
            </div>
            <div className="text-center bg-[#FF9F0D] flex flex-col justify-center items-center rounded-lg w-28 h-28">
              <FaWineGlass className="text-white text-4xl" />
              <p className="text-white mt-2">Dinner</p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-8 bg-white flex items-center justify-center px-6 py-4 rounded-lg w-full md:w-auto">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
              <span className="text-[#FF9F0D]">30+</span> Years of{" "}
              <span>Experience</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
