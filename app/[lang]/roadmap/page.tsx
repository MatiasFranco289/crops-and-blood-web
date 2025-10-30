"use client";
import ObjetiveFlag from "@/app/components/ObjetiveFlag";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function RoadMap() {
  const roadMap = {
    version: "1.0.0",
    lastUpdate: "2025-30-10",
    phases: [
      {
        phase: "Fase 1",
        title: "Diseño preliminar",
        date: "2025-10-24",
        completed: true,
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
        date: "2025-10-24",
        completed: false,
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
        date: "2025-10-24",
        completed: false,
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
        date: "2025-10-24",
        completed: false,
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
        date: "2025-10-24",
        completed: false,
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
        date: "2025-10-24",
        completed: false,
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
        date: "2025-10-24",
        completed: false,
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
        date: "2025-10-24",
        completed: false,
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
          {
            name: "Creacion del roadmap",
            fulfilled: false,
          },
        ],
      },
    ],
  };

  return (
    <div className="font-roboto bg-[#12050d] flex flex-col items-center min-h-screen overflow-hidden">
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center underline">
          {`Roadmap V${roadMap.version}`}
        </h2>
        <h3 className="text-white/80">Last update 2025-30-10</h3>
      </div>

      <div className="w-full flex justify-center mt-8">
        <div className="w-full sm:w-5/6">
          <SimpleBar autoHide={false} style={{ maxHeight: "none" }}>
            <div className="flex space-x-0 sm:space-x-12 sm:flex-row flex-col overflow-x-hidden sm:overflow-x-visible">
              {roadMap.phases.map((flag, index) => {
                return (
                  <ObjetiveFlag
                    title={flag.title}
                    phase={flag.phase}
                    date={flag.date}
                    objetives={flag.objetives}
                    key={`flag_${index}`}
                    drawTimeline={index !== roadMap.phases.length - 1}
                    completed={flag.completed}
                  />
                );
              })}
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
}
