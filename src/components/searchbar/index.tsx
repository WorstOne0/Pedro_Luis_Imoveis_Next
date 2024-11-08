"use client";

// Next
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Store
import { useDistrictStore, useSearchBarStore } from "@/store";
// Components
import { ApartamentSVG, Card, CardTitle, HouseSVG, LandSVG, ShopSVG, SobradoSVG } from "@/components";
// Icons
import { FaFilter, FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineSort, MdOutlineClose, MdDelete } from "react-icons/md";

type Filter = {
  propertyType: string[];
  price: number;
  rooms: number;
  bathrooms: number;
  garages: number;
  area: number;
};

export default function Searchbar({ children }: { children?: React.ReactNode }) {
  const { isSearchOpen, setIsSearchOpen } = useSearchBarStore((state) => state);
  const { districtSelected } = useDistrictStore((state) => state);
  const [filter, setFilter] = useState<Filter>({
    propertyType: ["apartament", "house", "land", "shop", "sobrado"],
    price: 0,
    rooms: 0,
    bathrooms: 0,
    garages: 0,
    area: 50,
  });

  const buildPropertyCard = (type: string, title: string) => {
    let propertySvg = <div></div>;
    const isSelected = filter.propertyType.includes(type);

    if (type === "apartament")
      propertySvg = <ApartamentSVG className={`w-[3.8rem] h-[3.8rem] ${isSelected ? "fill-primary" : "fill-black"}  dark:fill-white`} />;
    if (type === "house")
      propertySvg = <HouseSVG className={`w-[3.8rem] h-[3.8rem] ${isSelected ? "fill-primary" : "fill-black"}  dark:fill-white`} />;
    if (type === "land") propertySvg = <LandSVG className={`w-[3.8rem] h-[3.8rem] ${isSelected ? "fill-primary" : "fill-black"}  dark:fill-white`} />;
    if (type === "shop") propertySvg = <ShopSVG className={`w-[3.8rem] h-[3.8rem] ${isSelected ? "fill-primary" : "fill-black"}  dark:fill-white`} />;
    if (type === "sobrado")
      propertySvg = <SobradoSVG className={`w-[3.8rem] h-[3.8rem] ${isSelected ? "fill-primary" : "fill-black"}  dark:fill-white`} />;

    const handlePropertyClick = () => {
      let newPropertyType = [];

      if (filter.propertyType.includes(type)) {
        newPropertyType = filter.propertyType.filter((item) => item !== type);
      } else {
        newPropertyType = [...filter.propertyType, type];
      }

      setFilter((prev) => ({
        ...prev,
        propertyType: newPropertyType,
      }));
    };

    return (
      <Card
        className={`flex flex-col justify-center items-center select-none cursor-pointer 
          ${isSelected ? "border-2 border-primary dark:bg-primary" : "dark:bg-secondary"}`}
        onClick={handlePropertyClick}
      >
        {propertySvg}
        <span className={`font-bold text-[1.4rem] ${isSelected ? "text-primary dark:text-white" : ""}`}>{title}</span>
      </Card>
    );
  };

  const buildRoomsCard = (type: string, title: string) => {
    const handleButtonClick = (isAdd: boolean, type: string) => {
      if (type == "rooms") {
        setFilter((prev) => ({ ...prev, rooms: isAdd ? prev.rooms + 1 : prev.rooms == 0 ? 0 : prev.rooms - 1 }));
      }

      if (type == "bathrooms") {
        setFilter((prev) => ({ ...prev, bathrooms: isAdd ? prev.bathrooms + 1 : prev.bathrooms == 0 ? 0 : prev.bathrooms - 1 }));
      }
    };

    return (
      <Card className={`h-full w-full flex flex-col justify-center items-center select-none  mr-[1rem] last:mr-0 dark:bg-secondary`}>
        <div className="w-full flex justify-between items-center px-[3rem]">
          <FaMinus className="text-[1.8rem] cursor-pointer" onClick={() => handleButtonClick(false, type)} />
          <span className="text-[4.6rem]">{type == "rooms" ? filter.rooms : filter.bathrooms}</span>
          <FaPlus className="text-[1.8rem] cursor-pointer" onClick={() => handleButtonClick(true, type)} />
        </div>
        <span className={`font-bold text-[1.4rem] mt-[1rem]`}>{title}</span>
      </Card>
    );
  };

  const buildSpaceCard = (type: string, title: string) => {
    const handleButtonClick = (isAdd: boolean, type: string) => {
      if (type == "garages") {
        setFilter((prev) => ({ ...prev, garages: isAdd ? prev.garages + 1 : prev.garages == 0 ? 0 : prev.garages - 1 }));
      }

      if (type == "area") {
        setFilter((prev) => ({ ...prev, area: isAdd ? prev.area + 50 : prev.area == 0 ? 50 : prev.area - 50 }));
      }
    };

    return (
      <Card className={`h-full w-full flex flex-col justify-center items-center select-none  mr-[1rem] last:mr-0 dark:bg-secondary`}>
        <div className="w-full flex justify-between items-center px-[3rem]">
          <FaMinus className="text-[1.8rem] cursor-pointer" onClick={() => handleButtonClick(false, type)} />
          <span className="text-[4.6rem]">{type == "garages" ? filter.garages : filter.area}</span>
          <FaPlus className="text-[1.8rem] cursor-pointer" onClick={() => handleButtonClick(true, type)} />
        </div>
        <span className={`font-bold text-[1.4rem] mt-[1rem]`}>{title}</span>
      </Card>
    );
  };

  return (
    <AnimatePresence>
      {!isSearchOpen && (
        <motion.div
          key={"searchbar"}
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
          className="px-3 mt-[1.5rem] mb-[0.5rem]"
        >
          <div className="h-full w-full flex flex-col rounded-[0.8rem]">
            <div className="flex justify-between items-end px-[0.5rem]">
              <div>
                <span className="text-[3rem] font-bold leading-[3rem]">50</span>
                <span className="italic ml-1">Imóveis</span>
              </div>
              <div className="flex">
                <Card className="py-2 px-[1.2rem] flex items-center mr-3">
                  <MdOutlineSort size={20} />
                </Card>
                <Card className="py-2 px-[1.8rem] flex items-center" onClick={() => setIsSearchOpen(true)}>
                  <FaFilter size={13} />
                  <span className="ml-3 font-bold text-[1.6rem]">Filtros</span>
                </Card>
              </div>
            </div>
          </div>

          {children}
        </motion.div>
      )}

      {isSearchOpen && (
        <motion.div
          key={"filters"}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
          className="h-full w-full bg-background flex flex-col items-start rounded-[0.8rem] absolute top-0 left-0 z-10"
        >
          {/* Title */}
          <div className="w-full flex justify-between items-center pl-[2rem] pr-[1.5rem] pt-[1rem]  mt-[0.8rem] mb-[0.5rem]">
            <div className="flex items-center">
              <FaFilter className="mb-1" size={18} />
              <span className="ml-3 font-bold text-[2.2rem]">Filtros</span>
            </div>

            <div className="flex">
              <Card className="py-2 px-[1.2rem] flex items-center mr-3 bg-red-500">
                <MdDelete size={20} color="white" />
              </Card>
              <Card className="py-2 px-[1.8rem] flex items-center" onClick={() => setIsSearchOpen(false)}>
                <MdOutlineClose size={20} />
                <span className="ml-3 font-bold text-[1.6rem]">Fechar</span>
              </Card>
            </div>
          </div>

          {/*  */}
          <div className="min-h-0 w-full p-[1rem] grow flex flex-col overflow-y-auto">
            <Card className="min-h-[25rem] w-full my-[0.5rem] flex flex-col justify-between items-center p-[0.8rem]">
              <CardTitle className="font-bold text-[2.2rem] mb-[0.8rem]">Tipo de Imóvel</CardTitle>
              <div className="w-full grow grid grid-cols-3 grid-rows-2 grid-flow-col gap-4">
                {buildPropertyCard("apartament", "Apartamento")}
                {buildPropertyCard("house", "Casa")}
                {buildPropertyCard("land", "Terreno")}
                {buildPropertyCard("shop", "Comercial")}
                {buildPropertyCard("sobrado", "Sobrado")}
              </div>
            </Card>

            <Card className="min-h-[10rem] w-full my-3 flex flex-col justify-between items-center p-[0.8rem]">
              <CardTitle className="font-bold text-[2.2rem] mb-[0.8rem]">Bairro</CardTitle>
              {districtSelected.name}
            </Card>

            <Card className="min-h-[25rem] w-full my-3 flex flex-col justify-between items-center p-[0.8rem]">
              <CardTitle className="font-bold text-[2.2rem] mb-[0.8rem]">Preço</CardTitle>
              <div className="w-full grow grid grid-cols-3 grid-rows-2 grid-flow-col gap-4">
                {buildPropertyCard("apartament", "Apartamento")}
                {buildPropertyCard("house", "Casa")}
                {buildPropertyCard("land", "Terreno")}
                {buildPropertyCard("shop", "Comercial")}
                {buildPropertyCard("sobrado", "Sobrado")}
              </div>
            </Card>

            <Card className="min-h-[22rem] w-full my-3 flex flex-col justify-between items-center p-[0.8rem]">
              <CardTitle className="font-bold text-[2.2rem] mb-[0.8rem] ">Quartos</CardTitle>
              <div className="w-full grow flex">
                {buildRoomsCard("rooms", "Quartos")}
                {buildRoomsCard("bathrooms", "Banheiros")}
              </div>
            </Card>

            <Card className="min-h-[25rem] w-full my-3 flex flex-col justify-between items-center p-[0.8rem]">
              <CardTitle className="font-bold text-[2.2rem] mb-[0.8rem]">Espaço</CardTitle>
              <div className="w-full grow flex">
                {buildSpaceCard("garages", "Garagens")}
                {buildSpaceCard("area", "Area (m2)")}
              </div>
            </Card>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
