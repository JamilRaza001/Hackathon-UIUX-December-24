import { FaUserTie, FaUtensils, FaPizzaSlice, FaMedal } from "react-icons/fa";

export default function StatsSection() {
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {/* Professional Chefs */}
          <div className="flex flex-col items-center">
            <FaUserTie className="text-[#FF9F0D] text-4xl md:text-5xl mb-4" />
            <p className="text-lg md:text-xl font-semibold">
              Professional Chefs
            </p>
            <p className="text-2xl md:text-3xl font-extrabold">420</p>
          </div>

          {/* Items of Food */}
          <div className="flex flex-col items-center">
            <FaUtensils className="text-[#FF9F0D] text-4xl md:text-5xl mb-4" />
            <p className="text-lg md:text-xl font-semibold">Items Of Food</p>
            <p className="text-2xl md:text-3xl font-extrabold">320</p>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col items-center">
            <FaMedal className="text-[#FF9F0D] text-4xl md:text-5xl mb-4" />
            <p className="text-lg md:text-xl font-semibold">
              Years Of Experience
            </p>
            <p className="text-2xl md:text-3xl font-extrabold">30+</p>
          </div>

          {/* Happy Customers */}
          <div className="flex flex-col items-center">
            <FaPizzaSlice className="text-[#FF9F0D] text-4xl md:text-5xl mb-4" />
            <p className="text-lg md:text-xl font-semibold">Happy Customers</p>
            <p className="text-2xl md:text-3xl font-extrabold">220</p>
          </div>
        </div>
      </div>
    </div>
  );
}
