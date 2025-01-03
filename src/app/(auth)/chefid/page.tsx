import Image from "next/image";
import React from "react";
import CommonHeader from "@/components/CommonHeader";
const chefs = [
  { name: "Tahmina Rumi", role: "Chef", img: "/images/cheifs1.png" },
  { name: "Jorina Begum", role: "Chef", img: "/images/cheifs2.png" },
  { name: "M. Mohammad", role: "Chef", img: "/images/cheifs3.png" },
  { name: "Munna Kathy", role: "Chef", img: "/images/cheifs4.png" },
  { name: "Bisnu Devgon", role: "Chef", img: "/images/cheifs5.png" },
  { name: "Motin Molladsf", role: "Chef", img: "/images/cheifs6.png" },
  { name: "William Rumi", role: "Chef", img: "/images/cheifs7.png" },
  { name: "Kets William Roy", role: "Chef", img: "/images/cheifs8.png" },
  { name: "Mahmud Kholil", role: "Chef", img: "/images/cheifs9.png" },
  { name: "Ataur Rahman", role: "Chef", img: "/images/cheifs10.png" },
  { name: "Monalisa Holly", role: "Chef", img: "/images/cheifs11.png" },
  { name: "Tahmina Rummi", role: "Chef", img: "/images/cheifs12.png" },
];

const ChefGallery = () => {
  return (
    <div className="bg-gray-100 pb-12">
      {/* Header Section */}
      <CommonHeader title="Chef-id" subTitle="Home" />

      {/* Images Section */}
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Chefs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                width={500}
                height={500}
                src={chef.img}
                alt={chef.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{chef.name}</h3>
                <p className="text-gray-500 text-sm">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefGallery;
