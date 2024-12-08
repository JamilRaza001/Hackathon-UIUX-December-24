import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h3 className="text-[#FF9F0D] text-lg sm:text-xl font-semibold mb-2">
            About us
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            We <span className="text-[#FF9F0D]">Create</span> the best foody
            product
          </h2>
          <p className="text-gray-400 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non volutpat fringilla bibendum. Ut ac
            augue, nunc vitae egestas porttitor dictum eleifend. Ut eros mattis
            sed vitae risus risus. Lacus nisi, at ac dapibus sit ut velit in
            consequat.
          </p>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg">
            <li className="flex items-start">
              <span className="text-[#FF9F0D] mr-2">✔</span> Lacus nisi, at ac
              dapibus sit ut velit in consequat.
            </li>
            <li className="flex items-start">
              <span className="text-[#FF9F0D] mr-2">✔</span> Quisque diam
              pellentesque bibendum non id volutpat fringilla.
            </li>
            <li className="flex items-start">
              <span className="text-[#FF9F0D] mr-2">✔</span> Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <button className="mt-6 bg-[#FF9F0D] text-white py-3 px-6 rounded-lg hover:bg-orange-500 transition-all duration-300">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/images/section1_1.png"
              alt="Food Image 1"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <Image
            src="/images/section1_2.png"
            alt="Food Image 2"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
          <Image
            src="/images/section1_3.png"
            alt="Food Image 3"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
