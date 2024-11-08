"use client";

// Next
import { motion } from "framer-motion";
// Store
import { useDistrictStore, useSearchBarStore } from "@/store";
// Components
import { Card, Input } from "@/components";
// Icons
import { FaFilter } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";

export default function Searchbar() {
  const { isSearchOpen, setIsSearchOpen } = useSearchBarStore((state) => state);
  const { districtSelected } = useDistrictStore((state) => state);

  if (!isSearchOpen) {
    return (
      <div className="px-3 mt-[1.5rem] mb-[0.5rem]">
        <div className="h-full w-full flex flex-col rounded-[0.8rem] ">
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
      </div>
    );
  }

  if (isSearchOpen) {
    return (
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.4 }}
        className="h-full w-full p-[1rem] bg-background flex flex-col items-start absolute top-0 left-0 z-10"
      >
        {/* Title */}
        <div className="flex justify-between items-center">
          <div className="flex">
            <FaFilter size={13} />
            <span className="ml-3 font-bold text-[1.6rem]">Filtros</span>
          </div>

          <div onClick={() => setIsSearchOpen(false)}>Fechar</div>
        </div>

        {/*  */}
        <Card className="h-[20rem] w-full my-3 flex flex-col justify-between items-center p-[0.8rem]">
          <span className="mb-2">Tipo de Imóvel</span>
          <div className="w-full grow grid grid-cols-3 grid-rows-2 grid-flow-col gap-4">
            <Card>a</Card>
            <Card>a</Card>
            <Card>a</Card>
            <Card>a</Card>
            <Card>a</Card>
          </div>
        </Card>
      </motion.div>
    );
  }
}
