import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  date: string;
  title: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    date: "10 February 2022",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    image: "/images/section9_1.png",
  },
  {
    date: "10 February 2022",
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    image: "/images/section9_2.png",
  },
  {
    date: "10 February 2022",
    title: "Curabitur Rutrum Velit Ac Congue Malesuada",
    image: "/images/section9_3.png",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#FF9F0D] font-semibold text-lg uppercase">
            Blog Post
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold">
            Latest <span className="text-[#FF9F0D]">News & Blog</span>
          </h3>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-56 ">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-400">{post.date}</p>
                <h4 className="text-lg font-bold mt-3">{post.title}</h4>
                <div className="mt-6 flex items-center justify-between text-[#FF9F0D] text-sm">
                  <Link href="#" className="font-medium hover:underline">
                    Learn More
                  </Link>                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
