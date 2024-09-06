"use client";

export default function RealEstateCard({ realEstate }: { realEstate: any }) {
  const imgUrlClass =
    "bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwsfo9NC1pzBgR2nmp8LIBDIPbZSqODx4Sg&s')] bg-cover bg-no-repeat";

  return (
    <div className="h-[30rem] w-full bg-white mt-2 rounded-[0.8rem] flex flex-col select-none cursor-pointer">
      <div className="p-2">
        <div className={`h-[18rem] w-full rounded-[0.8rem] ${imgUrlClass}`}></div>
      </div>
      <div className="grow px-5 pt-3 pb-2">
        <div className=" flex justify-between items-center">
          <span className="text-[2.6rem] font-bold">R$ 400.000</span>
          <span className="text-[1.4rem] italic text-gray-600">Apartamento</span>
        </div>
        <div className="flex justify-between text-[1.6rem]">
          <div>4 quartos</div>
          <div>2 banheiros</div>
          <div>1 garagem</div>
          <div>235 m2</div>
        </div>
        <div className="flex items-center select-text">
          <div>icon</div>
          <span className="text-[1.4rem] italic text-gray-600">Rua Travessa Pio XII, 34, Cancelli, Cascavel, PR</span>
        </div>
      </div>
    </div>
  );
}
