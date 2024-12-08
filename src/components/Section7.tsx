"use client";
import { useState } from "react";
import Image from "next/image";
interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  image: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alamin Hasan",
    role: "Food Specialist",
    rating: 5,
    image: "/images/section7_1.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Chef",
    rating: 4,
    image: "/images/section7_1.png",
    feedback:
      "Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[#FF9F0D] text-lg font-bold">Testimonials</h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-2">
          What Our Clients Are Saying
        </h1>

        {/* Testimonial Card */}
        <div className="relative lg:mt-20 bg-white text-black mt-16 p-6 sm:p-8 rounded-lg shadow-lg">
          {/* Client Image */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <Image
              width={200}
              height={200}
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-20 sm:w-24 h-20 sm:h-24 rounded-full border-4 border-[#FF9F0D]"
            />
          </div>

          {/* Feedback */}
          <p className="mt-16 sm:mt-20 text-base sm:text-lg italic text-gray-700 leading-relaxed">
            {currentTestimonial.feedback}
          </p>

          {/* Rating */}
          <div className="mt-4 text-[#FF9F0D] text-lg sm:text-xl">
            {"★".repeat(currentTestimonial.rating)}
            {"☆".repeat(5 - currentTestimonial.rating)}
          </div>

          {/* Client Info */}
          <p className="mt-4 text-lg sm:text-xl font-bold">
            {currentTestimonial.name}
          </p>
          <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-[#FF9F0D]" : "bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
