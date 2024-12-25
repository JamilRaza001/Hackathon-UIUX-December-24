import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
interface propsType{
    title:string,
    subTitle:string,
}
const CommonHeader:React.FC<propsType> = ({title,subTitle}:propsType) => {
  return (
    <div
    className="relative bg-cover bg-center h-48 flex flex-col items-center justify-center"
    style={{
      backgroundImage: "url('/images/menu_1.png')",
    }}
  >
    <h1 className="text-white text-3xl font-bold text-center">{title}</h1>
    <p className="text-white mt-2 text-center flex items-center gap-1">
      <Link href="/" className="text-gray-300 hover:underline">
        {subTitle}
      </Link>
      <span className="text-[#FF9F0D]">
        <IoIosArrowForward className="w-4 h-4" />
      </span>
      <span className="text-[#FF9F0D]">{title}</span>
    </p>
  </div>
  )
}

export default CommonHeader
