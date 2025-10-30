import { forwardRef, RefObject } from "react";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import Separator from "./Separator";
import { getMonthName } from "../utils";
import { useParams } from "next/navigation";

interface ObjetiveFlagProps {
  date: string;
  phase: string;
  title: string;
  objetives: Array<{ name: string; fulfilled: boolean }>;
  ref: RefObject<HTMLDivElement | null>;
  drawTimeline?: boolean;
  completed: boolean;
}

const ObjetiveFlag = forwardRef<HTMLDivElement, ObjetiveFlagProps>(
  ({ date, phase, title, objetives, drawTimeline = false, completed }, ref) => {
    const lang = useParams().lang as "en" | "es";
    const monthName = getMonthName(date, lang);
    const year = date.split("T")[0].split("-")[0];

    return (
      <div className="flex flex-col items-center font-roboto mb-42" ref={ref}>
        <div className="flex flex-col-reverse sm:flex-col items-center mb-2 space-y-2 ml-4 sm:ml-0 w-full">
          <h3 className="text-xl font-semibold text-center">{`${monthName}. ${year}`}</h3>
          <div className="sm:hidden flex w-full justify-center">
            <Separator gap="h-4" width="w-4/6" />
          </div>
          <div className="z-50">
            <TbPointFilled
              className={`text-4xl block ${
                completed ? "text-[#8b1431]" : "text-white"
              }`}
            />
          </div>
        </div>

        <div className="w-full sm:max-w[1000px] max-w-[420px] sm:w-[400px] lg:w-[500px] h-full relative flex justify-center">
          {drawTimeline && (
            <div
              className={`h-[3px] ${
                completed ? "bg-[#8b1431]" : "bg-white"
              } min-w-[calc(100%+42px)] absolute top-[-28] left-[50%] hidden sm:block z-10`}
            />
          )}
          <img
            src={"/stick2.png"}
            className="w-full absolute top-0 z-30"
            style={{ imageRendering: "pixelated" }}
          />

          {/* Card */}
          <div className="bg-[#180712] mt-6 w-9/12 sm:8/12 flex flex-col items-center p-4 relative z-20">
            <h3 className="mt-8 text-lg text-center underline">{phase}</h3>
            <h3 className="text-xl font-semibold text-center">{title}</h3>

            {/* List */}
            <div className="mt-4 space-y-2">
              {objetives.map((objetive, index) => {
                return (
                  <div
                    key={`phase_${phase}_objetive_${index}`}
                    className="flex items-center"
                  >
                    {objetive.fulfilled ? (
                      <MdOutlineCheckBox className="text-2xl flex-shrink-0" />
                    ) : (
                      <MdCheckBoxOutlineBlank className="text-2xl flex-shrink-0" />
                    )}
                    <p className="ml-2">{objetive.name}</p>
                  </div>
                );
              })}
            </div>

            <img
              src={"/flag.png"}
              className=" w-full top-full absolute"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default ObjetiveFlag;
