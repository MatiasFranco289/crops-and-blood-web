import { forwardRef, RefObject } from "react";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";

interface ObjetiveFlagProps {
  date: string;
  phase: string;
  title: string;
  objetives: Array<{ name: string; fulfilled: boolean }>;
  ref: RefObject<HTMLDivElement | null>;
  loading: boolean;
}

const ObjetiveFlag = forwardRef<HTMLDivElement, ObjetiveFlagProps>(
  ({ date, phase, title, objetives, loading }, ref) => {
    return (
      <div
        className={`flex flex-col items-center font-roboto mb-52 sm:mb-42 h-full min-h-[380px] hover:scale-105 duration-200 ${
          loading ? "animate-pulse" : ""
        }`}
        ref={ref}
      >
        <div className="w-full sm:max-w[1000px] max-w-[420px] sm:w-[400px] lg:w-[500px] h-full min-h-[380px] relative flex justify-center">
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
