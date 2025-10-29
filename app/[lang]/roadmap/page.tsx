import ObjetiveFlag from "@/app/components/ObjetiveFlag";
import Separator from "@/app/components/Separator";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

export default function RoadMap() {
  const roadMap = [
    {
      phase: "Fase 1",
      title: "Diseño preliminar",
      startDate: "2025-10-24",
      endDate: "2026-02-01",
      objetives: [
        {
          name: "Creacion de la pagina web del juego",
          fulfilled: true,
        },
        {
          name: "Escritura y revision del GDD",
          fulfilled: false,
        },
        {
          name: "Creacion y estimacion de tareas",
          fulfilled: false,
        },
        {
          name: "Creacion del roadmap",
          fulfilled: false,
        },
        {
          name: "Busqueda del estilo artistico para el juego",
          fulfilled: false,
        },
        {
          name: "Renunciar al trabajo",
          fulfilled: false,
        },
      ],
    },
    {
      phase: "Fase 1",
      title: "Diseño preliminar",
      startDate: "2025-10-24",
      endDate: "2026-02-01",
      objetives: [
        {
          name: "Creacion de la pagina web del juego",
          fulfilled: true,
        },
        {
          name: "Escritura y revision del GDD",
          fulfilled: false,
        },
        {
          name: "Creacion y estimacion de tareas",
          fulfilled: false,
        },
        {
          name: "Creacion del roadmap",
          fulfilled: false,
        },
        {
          name: "Busqueda del estilo artistico para el juego",
          fulfilled: false,
        },
        {
          name: "Renunciar al trabajo",
          fulfilled: false,
        },
      ],
    },
    {
      phase: "Fase 1",
      title: "Diseño preliminar",
      startDate: "2025-10-24",
      endDate: "2026-02-01",
      objetives: [
        {
          name: "Creacion de la pagina web del juego",
          fulfilled: true,
        },
        {
          name: "Escritura y revision del GDD",
          fulfilled: false,
        },
        {
          name: "Creacion y estimacion de tareas",
          fulfilled: false,
        },
        {
          name: "Creacion del roadmap",
          fulfilled: false,
        },
        {
          name: "Busqueda del estilo artistico para el juego",
          fulfilled: false,
        },
        {
          name: "Renunciar al trabajo",
          fulfilled: false,
        },
      ],
    },
  ];

  return (
    <div className="font-roboto bg-[#12050d] min-h-screen w-full">
      <div className="flex flex-col items-center">
        <h2 className="pt-24 text-4xl font-semibold text-center">
          Roadmap V1.0
        </h2>
        <Separator width="w-4/6" gap="h-16" />
      </div>

      <div className="w-full flex justify-between px-40 mt-12 ">
        {roadMap.map((flag, index) => {
          return (
            <ObjetiveFlag
              title={flag.title}
              phase={flag.phase}
              startDate={flag.startDate}
              endDate={flag.endDate}
              objetives={flag.objetives}
              key={`flag_${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}
