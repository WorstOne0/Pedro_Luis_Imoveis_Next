"use client";

// Next
import { useApiFetch } from "@/hooks";
// Store
import { useRealEstateStore } from "@/store";
// Components
import { Card } from "@/components";
// Icons
import { FaWhatsapp } from "react-icons/fa";

export default function RealEstatePage({ params }: { params: { id: string } }) {
  const { realEstateSelected, setRealEstateSelected } = useRealEstateStore((state) => state);

  const { isLoading } = useApiFetch({ url: `http://localhost:4000/real_estate/${params.id}`, method: "post" }, setRealEstateSelected);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-h-full w-full p-[1.5rem] flex flex-col overflow-y-auto">
      {/* Image */}
      <div
        className={`min-h-[50vh] w-full rounded-[0.8rem] bg-cover bg-no-repeat bg-center relative`}
        style={{ backgroundImage: `url(${realEstateSelected?.thumbnail})` }}
      >
        <div className="absolute bottom-4 right-4"></div>
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
