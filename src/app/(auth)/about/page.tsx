import { IoMdPlay } from "react-icons/io";
import React from "react";
import Image from "next/image";
import CommonHeader from "@/components/CommonHeader";

const AboutPage = () => {
  return (
    <div>
      {/* Header Section */}
<CommonHeader title="About" subTitle="Home" />
      {/* About Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative w-full h-48">
              <Image
                src="/images/about1.png"
                alt="Tacos"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-full h-48">
              <Image
                src="/images/about2.png"
                alt="Chicken"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/images/about3.png"
              alt="Salad"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <h4 className="text-[#FF9F0D] text-lg font-medium italic mb-4">
            About us
          </h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Food is an important part <br /> Of a balanced Diet
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
            in consequat.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-[#FF9F0D] text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition">
              Show more
            </button>
            <button className="px-6 py-2 flex items-center gap-2 text-[#FF9F0D] border border-[#FF9F0D] rounded-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition">
              <IoMdPlay className="w-5 h-5" />
              Watch video
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Why Choose us
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Feature */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-[#FF9F0D] rounded-full flex items-center justify-center">
              {/* Replace with an appropriate icon */}
              <span className="text-2xl font-bold">👨‍🍳</span>
            </div>
            <h4 className="text-lg font-semibold">Best Chef</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque.
            </p>
          </div>

          {/* Second Feature */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-[#FF9F0D] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">🍴</span>
            </div>
            <h4 className="text-lg font-semibold">120 Item food</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque.
            </p>
          </div>

          {/* Third Feature */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-[#FF9F0D] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">🌿</span>
            </div>
            <h4 className="text-lg font-semibold">Clean Environment</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
 

