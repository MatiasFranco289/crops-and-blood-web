import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";

interface ObjetiveFlagProps {
  startDate: string;
  endDate: string;
  phase: string;
  title: string;
  objetives: Array<{ name: string; fulfilled: boolean }>;
}

export default function ObjetiveFlag({
  startDate,
  endDate,
  phase,
  title,
  objetives,
}: ObjetiveFlagProps) {
  return (
    <div className="flex flex-col items-center">
      <TbPointFilled className="text-2xl" />
      <h2 className="text-xl font-semibold my-3">Ene. 2025</h2>
      <div className="w-[500px] flex flex-col items-center relative">
        <img
          src={"/stick2.png"}
          className="w-full z-30"
          style={{ imageRendering: "pixelated" }}
        />

        <div className="w-8/12 absolute top-10 z-0 bg-[#180712]  p-6">
          <img
            src={"/flag.png"}
            className="w-full absolute top-full left-0"
            style={{ imageRendering: "pixelated" }}
          />

          <div>
            <div className="flex flex-col items-center mt-3">
              <h3 className="text-lg underline">{phase}</h3>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          </div>

          <div className="my-6 space-y-2">
            {objetives.map((objetive, index) => {
              return (
                <div
                  className="flex items-center justify-start"
                  key={`active_objetive_${phase}_${index}`}
                >
                  <MdCheckBoxOutlineBlank className="mr-3 shrink-0 text-xl" />
                  <p>{objetive.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-8/12 top-10 z-0 bg-[#180712] p-6 invisible">
          <div>
            <div className="flex justify-center text-white/50">
              <p>{startDate}</p>
              <p className="mx-2">-</p>
              <p>{endDate}</p>
            </div>

            <div className="flex flex-col items-center mt-3">
              <h3 className="text-lg underline">{phase}</h3>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          </div>

          <div className="my-6 space-y-2">
            {objetives.map((objetive, index) => {
              return (
                <div
                  className="flex items-center justify-start"
                  key={`invisible_objetive_${phase}_${index}`}
                >
                  <MdCheckBoxOutlineBlank className="mr-3 shrink-0 text-xl" />
                  <p>{objetive.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
