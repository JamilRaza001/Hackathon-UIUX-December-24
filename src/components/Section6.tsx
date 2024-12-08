import Image from "next/image";

interface Chef {
  name: string;
  role: string;
  image: string;
}

const MeetOurChef = () => {
  const chefs: Chef[] = [
    {
      name: "D. Estwood",
      role: "Chief Chef",
      image: "/images/section6_1.png",
    },
    {
      name: "D. Scoriesh",
      role: "Assistant Chef",
      image: "/images/section6_2.png",
    },
    {
      name: "M. William",
      role: "Advertising Chef",
      image: "/images/section6_3.png",
    },
    {
      name: "W. Readfroad",
      role: "Chef",
      image: "/images/section6_4.png",
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#FF9F0D] mb-8">
          Meet Our Chef
        </h2>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-[300px] md:h-[350px] w-full">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 px-4 py-3">
                  <h3 className="text-lg font-bold text-black">{chef.name}</h3>
                  <p className="text-sm text-gray-600">{chef.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 border-2 border-[#FF9F0D] text-white font-semibold rounded-full hover:bg-[#FF9F0D] hover:text-black transition-colors duration-300">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetOurChef;
