"use client";

// Next
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  const buttons = [
    { value: "/", name: "Home" },
    { value: "/real_estate", name: "Busca" },
    { value: "/about", name: "Sobre" },
    { value: "/contact", name: "Contato" },
  ];

  const createButton = ({ route, index }: { route: any; index: number }) => {
    return (
      <div key={`nav_button_${index}`} className="mr-[8rem] last:mr-0 font-medium">
        <Link
          href={route.value}
          className={`px-3 border-b-2 ${pathname === route.value ? "border-blue-600" : "border-transparent"} cursor-pointer select-none`}
        >
          {route.name}
        </Link>
      </div>
    );
  };

  return (
    <nav className="h-[7rem] w-full bg-white flex justify-center items-center">
      <div className="h-full w-[20rem] bg-red-500"></div>
      <div className="min-w-0 grow flex justify-center">{buttons.map((route, index) => createButton({ route, index }))}</div>
      <div className="h-full w-[20rem] bg-red-500"></div>
    </nav>
  );
}
