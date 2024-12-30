"use client";

// Next
import Link from "next/link";
// Hooks
import { useApiFetch } from "@/hooks";
// Store
import { useRealEstateStore } from "@/store";
// Components
import { Card, Slideshow } from "@/components";
import { SlideshowHandle } from "@/components/slideshow";
// Icons
import { FaWhatsapp, FaArrowLeft, FaBed, FaBath } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiGarage } from "react-icons/pi";
import { GiExpand } from "react-icons/gi";
import { useRef } from "react";

export default function RealEstatePage({ params }: { params: { id: string } }) {
  const { realEstateSelected, setRealEstateSelected } = useRealEstateStore((state) => state);

  const { isLoading } = useApiFetch({ url: `http://localhost:4000/real_estate/${params.id}`, method: "post" }, setRealEstateSelected);

  const slideshowRef = useRef<SlideshowHandle>(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-h-full w-full p-[1.5rem] flex flex-col overflow-y-auto">
      {/* Slideshow */}
      <Slideshow ref={slideshowRef} />

      {/* Image */}
      <div className={`min-h-[50vh] w-full flex justify-between`}>
        <div
          className={`min-h-[50vh] w-[85%] rounded-[0.8rem] bg-cover bg-no-repeat bg-center relative`}
          style={{ backgroundImage: `url(${realEstateSelected?.thumbnail})` }}
          onClick={() => slideshowRef.current?.openSlideshow()}
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
            onClick={() => slideshowRef.current?.openSlideshow()}
          ></div>
          <div
            className={`h-[32%] w-[100%] rounded-[0.8rem] bg-cover bg-no-repeat bg-center`}
            style={{ backgroundImage: `url(${realEstateSelected?.thumbnail})` }}
            onClick={() => slideshowRef.current?.openSlideshow()}
          ></div>
          <div className={`h-[32%] w-[100%] rounded-[0.8rem] overflow-hidden relative`}>
            <div
              className={`h-[100%] w-[100%] rounded-[0.8rem] bg-cover bg-no-repeat bg-center`}
              style={{ backgroundImage: `url(${realEstateSelected?.thumbnail})`, filter: "blur(8px)" }}
              onClick={() => slideshowRef.current?.openSlideshow()}
            ></div>
            <div className="flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] select-none">
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
      <div className="min-h-[100rem] h-[100rem] flex mt-[1.5rem] ">
        {/* Left */}
        <div className="h-full min-w-0 grow px-[1.5rem]">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <MdDescription size={24} className="mr-2" />
              <span className="font-bold text-[2.6rem]">Descrição</span>
            </div>
            <div className="text-gray-500 text-[1.6rem] italic"></div>
          </div>
          <p className="mt-[1.5rem] text-justify text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lectus eros. Integer suscipit tortor et tempus congue. Nunc vitae elit
            vitae nisi convallis tristique id vitae est. Aliquam non libero accumsan, elementum nisl eu, eleifend purus. Aliquam a velit lacus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula ut justo quis convallis. Cras ultricies ultricies dictum. In sed
            interdum arcu. Ut vitae urna orci. Sed sed finibus nibh. Integer sit amet libero eu velit convallis dictum. In hac habitasse platea
            dictumst. Nullam euismod ultricies metus. Morbi tincidunt lacinia massa, ut egestas velit cursus ac. Sed varius massa ut ex lobortis
            consectetur. Aliquam vel lectus sed dolor pharetra faucibus. Sed blandit ornare ante, id convallis nisl vehicula a. Sed a porta eros. Ut
            tempor elit felis, nec dictum enim auctor vestibulum. Aliquam lacus dui, auctor vel dictum quis, consectetur non urna. Sed cursus, felis
            sed volutpat rutrum, elit nunc dapibus elit, eu mattis nunc velit sit amet nunc. Nunc nec lacus at nulla ultrices imperdiet id nec tortor.
            Ut ac tempus tellus.
          </p>

          <div className="mt-[3rem] w-full flex justify-between items-center">
            <div className="flex items-center">
              <FaLocationDot size={24} className="mr-2" />
              <span className="font-bold text-[2.6rem]">Endereço</span>
            </div>
            <div className="text-gray-500 text-[1.6rem] italic">Rua Travessa Pio XII, 34, Cancelli, Cascavel, PR</div>
          </div>

          <div className="w-full grid grid-cols-2 gap-[1.5rem] mt-[1.5rem]">
            <Card className="flex justify-between items-center px-[1.5rem] py-[0.5rem]">
              <span className="font-bold">Cidade</span>
              <span className="italic">Cascavel</span>
            </Card>
            <Card className="flex justify-between items-center px-[1.5rem] py-[0.5rem]">
              <span className="font-bold">Estado</span>
              <span className="italic">Paraná</span>
            </Card>
            <Card className="flex justify-between items-center px-[1.5rem] py-[0.5rem]">
              <span className="font-bold">CEP</span>
              <span className="italic">85811-310</span>
            </Card>
            <Card className="flex justify-between items-center px-[1.5rem] py-[0.5rem]">
              <span className="font-bold">Bairro</span>
              <span className="italic">Cancelli</span>
            </Card>
            <Card className="flex justify-between items-center px-[1.5rem] py-[0.5rem]">
              <span className="font-bold">Rua</span>
              <span className="italic">Travessa Pio XII</span>
            </Card>
            <Card className="flex justify-between items-center px-[1.5rem] py-[0.5rem]">
              <span className="font-bold">Número / Comp.</span>
              <span className="italic">34, Esquina</span>
            </Card>
          </div>
        </div>

        {/* Right */}
        <div className="h-full min-w-[50rem] ml-[1.5rem]">
          <Card className="h-[30rem] w-full flex flex-col p-[1.5rem]">
            <div className="min-h-0 grow flex flex-col">
              <div className="flex justify-between">
                <span className="font-bold text-[2.2rem]">Informações</span>
                <span className="text-gray-500 text-[1.4rem] italic">Criado as 12/12/2024</span>
              </div>

              <div className="min-h-0 grow flex flex-col justify-center items-center">
                <span className="text-[1.6rem]">Preço</span>
                <span className="text-[3.6rem] font-extrabold tracking-widest">R$ {realEstateSelected?.price.toLocaleString()}</span>
              </div>

              <Card className="flex justify-center py-[0.5rem]">
                <div className="flex items-center px-[1rem]">
                  <FaBed size={16} color="text-foreground" className="mr-2" />
                  <span>2</span>
                </div>
                <div className="flex items-center px-[1rem]">
                  <FaBath size={16} color="text-foreground" className="mr-2" />
                  <span>2</span>
                </div>
                <div className="flex items-center px-[1rem]">
                  <PiGarage size={16} color="text-foreground" className="mr-2" />
                  <span>2</span>
                </div>
                <div className="flex items-center px-[1rem]">
                  <GiExpand size={16} color="text-foreground" className="mr-2" />
                  <span>2</span>
                </div>
              </Card>
            </div>

            <div className="h-[5rem] w-full flex mt-[1.5rem]">
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
