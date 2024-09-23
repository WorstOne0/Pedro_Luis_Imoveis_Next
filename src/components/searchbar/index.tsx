"use client";

// Next
import { useState } from "react";
import { motion } from "framer-motion";
// Components
import { Card } from "@/components/ui/card";
// Icons
import { FaFilter } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Searchbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isExpanded) {
    return (
      <div className="min-h-[5rem] px-3 mt-3">
        <Card className="h-full w-full flex rounded-[0.8rem] bg-blue-100">
          <div className="min-w-0 grow flex items-center px-4">
            <div className="flex items-end">
              <span className="text-[3rem] font-bold leading-[3rem]">50</span>
              <span className="italic ml-1">Imóveis</span>
            </div>
          </div>
          <div className="px-5 flex items-center" onClick={() => setIsExpanded(true)}>
            {/* <MdDelete className="mr-[1rem]" size={20} color="red" /> */}
            <FaFilter size={16} />
          </div>
        </Card>
      </div>
    );
  }

  if (isExpanded) {
    return (
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.4 }}
        className="w-full bg-red-500 flex absolute top-0 left-0 z-10"
      >
        <div>
          <span>50</span>
          <span>Imóveis</span>
        </div>
        <div onClick={() => setIsExpanded(false)}>Filtro</div>
      </motion.div>
    );
  }
}
