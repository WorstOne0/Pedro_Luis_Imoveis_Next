"use client";

// Next
import { useState } from "react";
// Components
import { Card } from "@/components/ui/card";
// Icons
import { FaBed, FaBath, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiGarage } from "react-icons/pi";
import { GiExpand } from "react-icons/gi";

export default function RealEstateCard({ realEstate }: { realEstate: any }) {
  const [isSelected, setIsSelected] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const imgUrlClass =
    "bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwsfo9NC1pzBgR2nmp8LIBDIPbZSqODx4Sg&s')] bg-cover bg-no-repeat";

  const handleCardClick = (event: any) => {
    event.stopPropagation();
    setIsSelected(!isSelected);
  };

  const handleFavoriteClick = (event: any) => {
    event.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Card className="mt-4 rounded-[0.8rem]" onClick={handleCardClick}>
      <div className={`pb-3 flex flex-col select-none cursor-pointer rounded-[0.8rem] ${isSelected ? "border-2 border-blue-600" : ""}`}>
        {/* Imagem */}
        <div className={`h-[19rem] w-full rounded-t-[0.8rem] ${imgUrlClass} relative`}>
          <div className="absolute bottom-4 right-4" onClick={handleFavoriteClick}>
            {isFavorited ? <FaBookmark color="blue" /> : <FaRegBookmark color="blue" />}
          </div>
        </div>
        <div className="grow px-5 pt-3 pb-2">
          {/* Title */}
          <div className="flex justify-between items-center">
            <span className="text-[2.6rem] font-extrabold">R$ 400.000</span>
            <span className="text-[1.4rem] italic text-gray-600">Apartamento</span>
          </div>
          {/* Body */}
          <div className="flex justify-between text-[1.6rem]">
            <div className="flex items-center">
              <FaBed size={16} color="black" className="mr-2" />
              <span className="font-bold text-[1.6rem] mr-1">4</span>
              <span className="">quartos</span>
            </div>
            <div className="flex items-center">
              <FaBath size={16} color="black" className="mr-2" />
              <span className="font-bold text-[1.6rem] mr-1">4</span>
              <span className="">banheiros</span>
            </div>
            <div className="flex items-center">
              <PiGarage size={16} color="black" className="mr-2" />
              <span className="font-bold text-[1.6rem] mr-1">4</span>
              <span>garagem</span>
            </div>
            <div className="flex items-center">
              <GiExpand size={16} color="black" className="mr-2" />
              <span className="font-bold text-[1.6rem] mr-1">350</span>
              <span>
                m<sup>2</sup>
              </span>
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center select-text mt-4">
            <FaLocationDot size={14} color="red" className="mr-2" />
            <span className="text-[1.4rem] italic text-gray-600 leading-6">Rua Travessa Pio XII, 34, Cancelli, Cascavel, PR</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
