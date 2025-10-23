"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaSteam } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#12050d] font-roboto">
      <div className="w-full flex flex-col items-center min-h-screen fixed">
        <div className="w-4/6">
          <Image
            src="/portrait_pc.png"
            alt="portrait.png"
            width={0}
            height={0}
            unoptimized={true}
            style={{
              width: "100%",
              height: "auto",
              imageRendering: "pixelated",
            }}
          />
        </div>

        <div className="space-y-4 flex flex-col items-center">
          <div>
            <h2 className="font-semibold text-xl mt-2">
              Destroy it, destroy it all
            </h2>
          </div>

          <div className="flex flex-row space-x-6 mt-6">
            <a href="" target="_blank" className="hover:scale-105 duration-200">
              <FaSteam className="text-6xl " />
            </a>

            <a href="" target="_blank" className="hover:scale-105 duration-200">
              <FaDiscord className="text-6xl" />
            </a>

            <a href="" target="_blank" className="hover:scale-105 duration-200">
              <FaYoutube className="text-6xl" />
            </a>

            <a href="" target="_blank" className="hover:scale-105 duration-200">
              <FaInstagram className="text-6xl" />
            </a>
          </div>

          <div>
            <button
              className="underline p-2 cursor-pointer hover:scale-105 duration-200"
              onClick={() => {
                scrollToBottom();
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen" />

      <div className="w-full bg-[#12050d] flex flex-col items-center justify-center min-h-screen items-center z-30 relative">
        <button
          className="absolute left-1/2 -translate-x-1/2 top-12 text-lg underline cursor-pointer p-2 hover:scale-105 duration-200"
          onClick={() => {
            scrollToTop();
          }}
        >
          Volver arriba
        </button>

        <div className="w-3/6 space-y-4">
          <p>
            Hola chicos, aca SunlessDev. Sip, parece que voy a estar renunciando
            a mi trabajo hacia finales de este año (2025) y viviendo en la
            absoluta indigencia para seguir mi sueño de desarrollar videojuegos.
          </p>

          <p>
            Crops and blood (Nombre provisional) será un juego en 2D, pixel art,
            que mezcla elementos de dos de mis géneros favoritos: Roguelikes y
            juegos de granja.
          </p>

          <p>
            Eres un recolector en el planeta Ereno. Te ganas la vida
            adentrándote en las zonas abandonadas, el único lugar del planeta
            donde se puede cultivar y obtener esencia. Planta semillas, riégalas
            con la sangre de tus enemigos, cultívalas para conseguir mejoras,
            arma tu build, rompe el juego y conviértete en un dios de la
            destrucción. Abrete paso sembrando el caos entre las hordas de
            enemigos para escapar con tu recompensa… y vuelve por más.
          </p>

          <p>
            Actualmente, el juego se encuentra en fase preliminar y estimo que
            el desarrollo real comenzará en febrero de 2026. Estaré publicando
            actualizaciones constantes en mis redes y en el blog de esta página,
            así que seguime y unite a esta aventura.
          </p>

          <p>Nos vemos en Ereno :).</p>
        </div>

        <div className="w-3/4 h-[1px] bg-white mt-24" />
      </div>
    </div>
  );
}
