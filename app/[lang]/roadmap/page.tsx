"use client";
import axiosInstance from "@/app/axios";
import ObjetiveFlag from "@/app/components/ObjetiveFlag";
import Separator from "@/app/components/Separator";
import { EN_ROADMAP_URL, ES_ROADMAP_URL } from "@/app/constants";
import { RoadMap as RoadMapType } from "@/app/interfaces";
import { getMonthName } from "@/app/utils";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function RoadMap() {
  const lang = useParams().lang as "en" | "es";
  const timeoutRef = useRef<number | null>(null);
  const timeLineRef = useRef<(HTMLDivElement | null)[]>([]);
  const [distance, setDistance] = useState(0);
  const [roadMap, setRoadMap] = useState<RoadMapType>();

  const texts = {
    updatedAt: {
      es: "Última actualización",
      en: "Last update",
    },
    soon: {
      es: "Próximamente",
      en: "Soon",
    },
  };
  const emptyPhase = {
    phase: "",
    title: "",
    date: "",
    completed: false,
    objectives: [],
  };
  const loadingRoadmap: RoadMapType = {
    version: "0.0.0",
    lastUpdate: "00-00-0000",
    phases: [emptyPhase, emptyPhase, emptyPhase],
  };

  useEffect(() => {
    if (timeLineRef.current.length <= 1) return;

    const calculateDistance = () => {
      const rectA = timeLineRef.current[1]?.getBoundingClientRect();
      const rectB = timeLineRef.current[2]?.getBoundingClientRect();
      if (!rectA || !rectB) return;
      setDistance(Math.abs(rectB.left - rectA.left));
    };

    const handleResize = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        calculateDistance();
      }, 150);
    };

    calculateDistance();
    window.addEventListener("resize", handleResize);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [timeLineRef]);

  useEffect(() => {
    getRoadMap();
  }, []);

  const getRoadMap = () => {
    const url = lang === "es" ? ES_ROADMAP_URL : EN_ROADMAP_URL;
    axiosInstance
      .get(url)
      .then((res) => {
        const data = res.data;

        if (data.phases.length < 3) {
          data.phases.push({ ...emptyPhase });
          data.phases.push(emptyPhase);
        }

        setRoadMap(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderFlags = (data: RoadMapType, loading: boolean) => {
    return data.phases.map((flag, index) => {
      const monthName = getMonthName(flag.date, lang);
      const year = flag.date.split("T")[0].split("-")[0];

      return (
        <div className="flex flex-col" key={`flag_${index}`}>
          <div className="flex flex-col-reverse sm:flex-col items-center sm:mb-6 mb-0 space-y-2 ml-4 sm:ml-0 w-full relative">
            {!loading ? (
              <h3 className="text-xl font-semibold text-center">{`${
                monthName
                  ? monthName + ". " + year
                  : flag.date
                  ? flag.date
                  : texts.soon[lang]
              }`}</h3>
            ) : (
              <h3 className="text-xl font-semibold text-transparent bg-white/10 animate-pulse">{`Oct. 2025`}</h3>
            )}
            <div className="sm:hidden flex w-full justify-center">
              <Separator gap="h-4" width="w-4/6" />
            </div>

            <div
              className="z-50 flex justify-start items-center"
              ref={(el) => {
                timeLineRef.current[index] = el;
              }}
            >
              {index !== data.phases.length - 1 && (
                <div
                  className={`absolute ${
                    loading ? "animate-pulse" : ""
                  }  h-[3px] ${flag.completed ? "bg-[#8b1431]" : "bg-white"}`}
                  style={{ width: distance }}
                />
              )}

              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 100 100"
                style={{ animationDelay: "300ms" }}
                className={`text-4xl ${loading ? "animate-pulse" : ""}  ${
                  flag.completed ? "text-[#8b1431]" : "text-white"
                } block`}
              >
                <circle cx="50" cy="50" r="50" fill="currentColor" />
              </svg>
            </div>
          </div>

          <ObjetiveFlag
            title={flag.title}
            phase={flag.phase}
            date={flag.date}
            objetives={flag.objectives}
            loading={loading}
          />
        </div>
      );
    });
  };

  return (
    <div className="font-roboto bg-[#12050d] flex flex-col items-center min-h-screen overflow-hidden">
      <div
        className={`flex flex-col items-center mt-20 ${
          !roadMap ? "animate-pulse" : ""
        }`}
      >
        <h2
          className={`text-3xl sm:text-4xl font-semibold text-center underline`}
        >
          {`Roadmap V${roadMap?.version || "0.0.0"}`}
        </h2>
        <h3 className="text-white/80">
          {texts.updatedAt[lang] +
            ": " +
            (roadMap ? roadMap.lastUpdate : loadingRoadmap.lastUpdate)}
        </h3>
      </div>

      <div className="w-full flex justify-center mt-8">
        <div className="w-full sm:w-5/6">
          {roadMap ? (
            <SimpleBar
              autoHide={false}
              style={{ maxHeight: "none", outline: "none" }}
            >
              <div className="flex space-x-0 sm:space-x-12 sm:flex-row flex-col overflow-x-hidden sm:overflow-x-visible justify-between">
                {renderFlags(roadMap, false)}
              </div>
            </SimpleBar>
          ) : (
            <div className="flex space-x-0 sm:space-x-12 sm:flex-row flex-col overflow-x-hidden sm:overflow-x-visible justify-between">
              {renderFlags(loadingRoadmap, true)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
