import CommonHeader from "@/components/CommonHeader";
import React from "react";

const MainShop = () => {
  return (
    <div>
      {/* Header Section */}
      <CommonHeader title="Shop" subTitle="Home" />

      {/* Main Content */}
      <div className="flex flex-col">
        {/*Filter */}
        <div className=" flex gap-4">
          <div className=" flex flex-row gap-1 items-center mb-4 mt-4">
            <h3 className="font-semibold text-lg h-6  w-auto">Sort By</h3>
            <input
              type="text"
              placeholder="Search"
              className="border-2  w-44 p-2 rounded h-8"
            />
          </div>

          <div className=" flex flex-row gap-3 items-center mb-4 mt-4">
            <h3 className="font-semibold text-lg h-6  w-auto ">Show</h3>
            <input
              type="text"
              placeholder="Search"
              className="border-2  w-44 p-2 rounded h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainShop;
