"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const params = useParams();

  return (
    <div className="w-full flex flex-row justify-end fixed space-x-6 p-5 z-50 font-roboto">
      <span>
        <Link
          href={"/"}
          className={`${
            pathname === `/${params.lang}`
              ? "text-white cursor-default scale-105"
              : "text-white/70 cursor-pointer"
          } hover:text-white hover:scale-105 duration-200 `}
        >
          {params.lang === "es" ? "Inicio" : "Home"}
        </Link>
      </span>

      <span>
        <Link
          href={`/${params.lang}/roadmap`}
          className={`${
            pathname === `/${params.lang}/roadmap`
              ? "text-white cursor-default scale-105"
              : "text-white/70 cursor-pointer"
          } hover:text-white hover:scale-105 duration-200`}
        >
          Roadmap
        </Link>
      </span>

      <span>
        <Link
          href={`/${params.lang}/devlog`}
          className={`${
            pathname === `/${params.lang}/devlog`
              ? "text-white cursor-default scale-105"
              : "text-white/70 cursor-pointer"
          } hover:text-white hover:scale-105 duration-200`}
        >
          Devlog
        </Link>
      </span>
    </div>
  );
}
