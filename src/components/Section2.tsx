import React from "react";
import Image from "next/image";

const FoodCategory = () => {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-[#FF9F0D] text-lg sm:text-xl font-semibold">
            Food Category
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Choose <span className="text-[#FF9F0D]">Food Item</span>
          </h2>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Food Card 1 */}
          <div className="relative group">
            <Image
              width={400}
              height={400}
              src="/images/section2_1.png"
              alt="Food 1"
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4 bg-[#FF9F0D] text-white px-2 py-1 text-xs sm:text-sm font-semibold rounded-md">
              Save 30%
            </div>
            <div className="absolute bottom-4 left-4 bg-[#FF9F0D] text-white px-3 py-1 text-xs sm:text-sm font-semibold rounded-md">
              Fast Food Dish
            </div>
          </div>

          {/* Food Card 2 */}
          <div className="relative group">
            <Image
              width={400}
              height={400}
              src="/images/section2_2.png"
              alt="Food 2"
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg"
            />
          </div>

          {/* Food Card 3 */}
          <div className="relative group">
            <Image
              width={400}
              height={400}
              src="/images/section2_3.png"
              alt="Food 3"
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg"
            />
          </div>

          {/* Food Card 4 */}
          <div className="relative group">
            <Image
              width={400}
              height={400}
              src="/images/section2_4.png"
              alt="Food 4"
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
