"use client";

// Next
import Link from "next/link";
// Hooks
import { useApiFetch } from "@/hooks";
// Store
import { useRealEstateStore } from "@/store";
// Components
import { Card } from "@/components";
// Icons
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";

export default function RealEstatePage({ params }: { params: { id: string } }) {
  const { realEstateSelected, setRealEstateSelected } = useRealEstateStore((state) => state);

  const { isLoading } = useApiFetch({ url: `http://localhost:4000/real_estate/${params.id}`, method: "post" }, setRealEstateSelected);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-h-full w-full p-[1.5rem] flex flex-col overflow-y-auto">
      {/* Image */}
      <div className={`min-h-[50vh] w-full flex justify-between`}>
        <div
          className={`min-h-[50vh] w-[85%] rounded-[0.8rem] bg-cover bg-no-repeat bg-center relative`}
          style={{ backgroundImage: `url(${realEstateSelected?.thumbnail})` }}
        >
          <Link
            href={"/"}
            className="h-[4rem] w-[4rem] absolute top-[1rem] left-[1rem] bg-background rounded-[0.8rem] cursor-pointer flex justify-center items-center"
          >
            <FaArrowLeft size={15} />
          </Link>
        </div>
        <div className={`min-h-[50vh] w-[15%] rounded-[0.8rem] flex flex-col justify-between ml-[1.5rem]`}>
          <div
            className={`h-[32%] w-[100%] rounded-[0.8rem] bg-cover bg-no-repeat bg-center`}
            style={{ backgroundImage: `url(${realEstateSelected?.thumbnail})` }}
          ></div>
          <div
            className={`h-[32%] w-[100%] rounded-[0.8rem] bg-cover bg-no-repeat bg-center`}
            style={{ backgroundImage: `url(${realEstateSelected?.thumbnail})` }}
          ></div>
          <div className={`h-[32%] w-[100%] rounded-[0.8rem] overflow-hidden relative`}>
            <div
              className={`h-[100%] w-[100%] rounded-[0.8rem] bg-cover bg-no-repeat bg-center`}
              style={{ backgroundImage: `url(${realEstateSelected?.thumbnail})`, filter: "blur(8px)" }}
            ></div>
            <div className="flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <span className="text-[2.2rem] font-bold text-center text-white" style={{ textShadow: "0 0 4px #000" }}>
                +16
              </span>
              <span className="text-[1.4rem] font-bold text-center text-white" style={{ textShadow: "0 0 4px #000" }}>
                Ver todas as fotos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="min-h-[100rem] flex mt-[1.5rem] ">
        {/* Left */}
        <div className="h-full min-w-0 grow bg-red-100"></div>

        {/* Right */}
        <div className="h-full min-w-[50rem] ml-[1.5rem]">
          <Card className="h-[30rem] w-full flex flex-col p-[1.5rem]">
            <div className="min-h-0 grow"></div>

            <div className="h-[5rem] w-full flex px-[1.5rem]">
              <Card className="min-w-0 grow flex justify-center items-center dark:bg-secondary rounded-[0.8rem]">
                <FaWhatsapp size={20} />
                <span className="font-bold text-[1.6rem] ml-[1rem]">Contato</span>
              </Card>
              <div className="w-[5rem] bg-red-500 rounded-[0.8rem] ml-[1.5rem]"></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
