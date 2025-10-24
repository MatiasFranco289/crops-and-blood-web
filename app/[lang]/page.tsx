"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaSteam } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useGlobal } from "../components/GlobalProvider";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef, useState } from "react";
import { getRandomScream } from "../utils";

export default function Home() {
  const { projectDetails } = useGlobal();
  const moreSectionRef = useRef<HTMLDivElement | null>(null);
  const lang = useParams().lang as "en" | "es";
  const [loadingTexts, setLoadingTexts] = useState<Array<string>>([]);

  useEffect(() => {
    const wordCount = 82;
    let result = [];

    for (let i = 0; i < wordCount; i++) {
      result.push(getRandomScream());
    }

    setLoadingTexts(result);
  }, []);

  const texts = {
    backToTop: {
      es: "Volver arriba",
      en: "Back to top",
    },
    seeMore: {
      es: "Ver más",
      en: "See more",
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
              {texts.seeMore[lang]}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen" />

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
          {projectDetails ? (
            <ReactMarkdown>{projectDetails?.long_description}</ReactMarkdown>
          ) : (
            <div className="flex flex-row flex-wrap space-x-2 space-y-2">
              {loadingTexts.map((text, index) => {
                return (
                  <p
                    key={`loading_scream_${index}`}
                    style={{ animationDelay: `${index * 30}ms` }}
                    className="bg-white/5 text-transparent animate-pulse rounded"
                  >
                    {text}
                  </p>
                );
              })}
            </div>
          )}
        </div>

        <div className="w-3/4 h-[1px] bg-white my-24" />
      </div>
    </div>
  );
}
