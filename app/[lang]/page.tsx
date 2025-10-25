"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaSteam } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useGlobal } from "../components/GlobalProvider";
import ReactMarkdown from "react-markdown";
import { useRef } from "react";

export default function Home() {
  const { projectDetails } = useGlobal();
  const moreSectionRef = useRef<HTMLDivElement | null>(null);
  const lang = useParams().lang as "en" | "es";

  const texts = {
    backToTop: {
      es: "Volver arriba",
      en: "Back to top",
    },
    seeMore: {
      es: "Ver más",
      en: "See more",
    },
    notAvailable: {
      es: "Todavia no disponible",
      en: "Not available yet",
    },
  };

  const scrollToBottom = () => {
    moreSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = {
    Steam: {
      icon: FaSteam,
      url: "",
    },
    Discord: {
      icon: FaDiscord,
      url: "",
    },
    Youtube: {
      icon: FaYoutube,
      url: "",
    },
    Instagram: {
      icon: FaInstagram,
      url: "",
    },
  };

  const renderizeSocials = () => {
    if (!projectDetails) {
      return Object.values(socials).map((s, index) => {
        return (
          <div key={`loading_social_${index}`}>
            {
              <s.icon
                className="text-4xl xl:text-6xl text-white/30 animate-pulse"
                style={{ animationDelay: `${index * 300}ms` }}
              />
            }
          </div>
        );
      });
    }

    return Object.keys(socials).map((k, index) => {
      const externalResource = projectDetails.external_resources.find(
        (er) => er.name === k
      );
      const social = socials[k as keyof typeof socials];

      if (externalResource) {
        return (
          <a
            href={externalResource.url}
            key={`social_${index}`}
            target="_blank"
          >
            {
              <social.icon className="text-4xl xl:text-6xl hover:scale-105 duration-200 text-white cursor-pointer" />
            }
          </a>
        );
      }

      return (
        <button key={`social_${index}`} title={texts.notAvailable[lang]}>
          {<social.icon className="text-4xl xl:text-6xl text-white/60" />}
        </button>
      );
    });
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#12050d] font-roboto">
      <div className="w-full flex flex-col items-center min-h-screen fixed">
        <div className="min-w-[300px] sm:min-w-[800px] xl:min-w-[1280px] w-4/6 bg-white/5">
          <picture>
            <source media="(max-width: 640px)" srcSet="/portrait_mobile.png" />
            <source media="(min-width: 640px)" srcSet="/portrait_pc.png" />
            <img
              src="/portrait_pc.png"
              alt="portrait"
              className="w-full h-auto aspect-[360/560] sm:aspect-[640/280]"
              style={{ imageRendering: "pixelated" }}
            />
          </picture>
        </div>

        <div className="space-y-4 flex flex-col items-center">
          <div>
            {projectDetails ? (
              <h2 className="font-semibold mt-2 text-[clamp(1.1rem,1.3vw,3rem)]">
                {projectDetails.short_description}
              </h2>
            ) : (
              <div className="flex space-x-2 text-transparent text-xl font-semibold mt-2">
                {["Destroy,", "it", "destroy", "it", "all"].map((t, index) => {
                  return (
                    <p
                      key={`short_text_loading_${index}`}
                      className="bg-white/5 rounded animate-pulse"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {t}
                    </p>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-row space-x-4 xl:space-x-6">
            {renderizeSocials()}
          </div>

          <div>
            <button
              className={`${
                projectDetails
                  ? "text-white cursor-pointer hover:scale-105"
                  : "text-white/50 animate-pulse"
              } underline p-2 duration-200`}
              onClick={() => {
                scrollToBottom();
              }}
            >
              {texts.seeMore[lang]}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen" />

      {projectDetails && (
        <div
          className="w-full bg-[#12050d] flex flex-col items-center justify-between min-h-screen items-center z-30"
          ref={moreSectionRef}
        >
          <button
            className="text-lg underline cursor-pointer hover:scale-105 duration-200 p-4 my-12 sm:my-8"
            onClick={() => {
              scrollToTop();
            }}
          >
            {texts.backToTop[lang]}
          </button>

          <div className="w-3/6 space-y-4">
            <ReactMarkdown>{projectDetails.long_description}</ReactMarkdown>
          </div>

          <div className="w-3/4 h-[1px] bg-white my-24" />
        </div>
      )}
    </div>
  );
}
