import React from "react";
import Image from "next/image";
import Section4 from "@/components/Section4";

const Menu = () => {
  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <div
        className="relative text-white text-center py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/menu_1.png')" }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Menu</h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-2">Delicious & Fresh</p>
      </div>

      {/* Starter Menu Section */}
      <div className="py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              width={500}
              height={500}
              src="/images/menu_2.png"
              alt="Starter Dish"
              className="rounded-lg shadow-md w-full h-auto lg:[300px] lg:ml-[-40px] lg:mt-5"
            />
          </div>

          {/* Menu Items Section */}
          <div className="w-full lg:w-1/2 lg:mt-28">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Starter Menu
            </h2>
            <ul className="space-y-6">
              {[
                {
                  name: "Alder Grilled Chinook Salmon",
                  desc: "Toasted French bread topped with romano, cheddar",
                  cal: "560 CAL",
                  price: "32$",
                },
                {
                  name: "Berries and Creme Tart",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  cal: "700 CAL",
                  price: "43$",
                },
                {
                  name: "Tormentoso Bush Pizza Pintoage",
                  desc: "Ground cumin, avocados, peeled and cubed",
                  cal: "1000 CAL",
                  price: "14$",
                },
                {
                  name: "Spicy Vegan Potato Curry",
                  desc: "Spreadable cream cheese, crumbled blue cheese",
                  cal: "580 CAL",
                  price: "35$",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row justify-between gap-4 border-b pb-2"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                    <p className="text-sm text-gray-500">{item.cal}</p>
                  </div>
                  <span className="text-[#FF9F0D] font-semibold text-lg">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Course Section */}
      <div className="py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Main Course
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Items Section */}
          <div className="w-full lg:w-1/2">
            <ul className="space-y-6">
              {[
                {
                  name: "Opic Big Breakfast Combo Menu",
                  desc: "Toasted French bread topped with romano, cheddar",
                  cal: "560 CAL",
                  price: "32$",
                },
                {
                  name: "Cashew Chicken With Stir-Fry",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  cal: "700 CAL",
                  price: "43$",
                },
                {
                  name: "Vegetables & Green Salad",
                  desc: "Ground cumin, avocados, peeled and cubed",
                  cal: "1000 CAL",
                  price: "14$",
                },
                {
                  name: "Spicy Vegan Potato Curry",
                  desc: "Spreadable cream cheese, crumbled blue cheese",
                  cal: "580 CAL",
                  price: "35$",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row justify-between gap-4 border-b pb-2"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                    <p className="text-sm text-gray-500">{item.cal}</p>
                  </div>
                  <span className="text-[#FF9F0D] font-semibold text-lg">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              width={500}
              height={500}
              src="/images/menu_3.png"
              alt="Main Course"
              className="rounded-lg shadow-md w-full h-auto lg:mt-[-40px] lg:ml-24"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Section4 />

      {/* Dessert Section */}
      <div className="py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              width={500}
              height={500}
              src="/images/menu_4.png"
              alt="Dessert"
              className="rounded-lg shadow-md w-full h-auto lg:h-[500px] lg:ml-[-40px]"
            />
          </div>

          {/* Menu Items Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Dessert
            </h2>
            <ul className="space-y-6">
              {[
                {
                  name: "Alder Grilled Chinook Salmon",
                  desc: "Toasted French bread topped with romano, cheddar",
                  cal: "560 CAL",
                  price: "32$",
                },
                {
                  name: "Berries and Creme Tart",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  cal: "700 CAL",
                  price: "43$",
                },
                {
                  name: "Berries and Creme Tart",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  cal: "700 CAL",
                  price: "43$",
                },
                {
                  name: "Berries and Creme Tart",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  cal: "700 CAL",
                  price: "43$",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row justify-between gap-4 border-b pb-2"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                    <p className="text-sm text-gray-500">{item.cal}</p>
                  </div>
                  <span className="text-[#FF9F0D] font-semibold text-lg">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Drinks Section */}
      <div className="py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Items Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Drinks
            </h2>
            <ul className="space-y-6">
              {[
                {
                  name: "Opic Big Breakfast Combo Menu",
                  desc: "Toasted French bread topped with romano, cheddar",
                  cal: "560 CAL",
                  price: "32$",
                },
                {
                  name: "Cashew Chicken With Stir-Fry",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  cal: "700 CAL",
                  price: "43$",
                },
                {
                  name: "Cashew Chicken With Stir-Fry",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  cal: "700 CAL",
                  price: "43$",
                },
                {
                  name: "Cashew Chicken With Stir-Fry",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  cal: "700 CAL",
                  price: "43$",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row justify-between gap-4 border-b pb-2"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                    <p className="text-sm text-gray-500">{item.cal}</p>
                  </div>
                  <span className="text-[#FF9F0D] font-semibold text-lg">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              width={500}
              height={500}
              src="/images/menu_5.png"
              alt="Drinks"
              className="rounded-lg shadow-md w-full h-auto lg:h-[500px] lg:ml-[40px]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
