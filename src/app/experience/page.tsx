import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Suspense } from "react";
import Loader from "../loading";
const CustomChip = ({ label, icon }: { label: string; icon?: string }) => {
  return (
    <div
      className="flex flex-row gap-2 overflow-hidden text-ellipsis border border-2 border-brandColor rounded-full 
  justify-center items-center min-w-fit px-2"
    >
      {icon && <Image src={icon} alt={label} width={20} height={20} />}
      <span>{label}</span>
    </div>
  );
};
const CustomStepper = ({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) => {
  return (
    <div className="flex flex-col items-start">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center py-2">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              index <= currentStep ? "bg-brandColor text-white" : "bg-gray-300 text-gray-600"
            }`}
          >
            {index + 1}
          </div>
          <div className="ml-2 text-sm">{step}</div>
        </div>
      ))}
    </div>
  );
};

const page = () => {
  const ietSteps = [
    "Chairperson (Present)",
    "Head - Public Relations (August 2023 - June 2024)",
    "Executive - Competitive Programming (Sep 2022 - August 2023)",
  ];

  const gdscSteps = [
    "Executive - Competitive Programming (Sep 2022 - August 2023)",
  ];

  const taqeeqSteps = [
    "Sub-Head - Publicity (Sep 2023 - August 2024)",
    "Executive - Publicity (Sep 2022 - August 2023)",
  ];

  return (
    <Suspense fallback={<Loader />}>
      <div className="min-h-screen">
        <div className="mt-[100px] text-center flex flex-col justify-center">
          <h1 className="text-brandColor mb-5">Experience</h1>
          <div className="mx-[40px] my-[10px] border-2 border-brandColor rounded">
            <div className="py-[10px] flex flex-row justify-center items-center grid md:grid-cols-3 grid-cols-1 gap-4">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/nobrokerage.png"
                  className="text-center bg-white img-fluid w-[80%] m-4 p-2 rounded"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center items-center md:items-start text-white md:px-[20px] col-span-2">
                <div className="w-full flex md:flex-row flex-col items-center justify-between">
                  <span className="text-xl font-bold">Nobrokerage.com</span>
                  <span>June 2024 - July 2024</span>
                </div>
                <div className="my-[10px]">
                  <span className="text-center md:text-left text-lg w-full">
                    Role :{" "}
                    <strong className="text-brandColor">
                      Full Stack Developer Intern
                    </strong>
                  </span>
                </div>
                <div className="mb-[10px] md:mx-0 mx-auto px-3 md:px-0">
                  <span className="flex justify-start items-center text-sm w-[300px]">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="max-w-[15px]"
                    />{" "}
                    <span className="flex mx-2">In Office , Mumbai</span>
                  </span>
                </div>
                <div className="mb-[10px] mx-auto text-wrap px-6 md:px-0">
                  <span className="text-center flex justify-center items-center text-sm">
                    <ul className="marker:text-brandColor list-disc text-left">
                      <li>
                        As a full stack intern, I developed{" "}
                        <strong className="text-brandColor">
                          {" "}
                          2 MERN Stack Websites
                        </strong>{" "}
                        in a time span of 45 Days.
                      </li>
                      <li>
                        Initially I also worked on{" "}
                        <strong className="text-brandColor"> PHP </strong> and{" "}
                        <strong className="text-brandColor">
                          CodeIgniter 4 Model
                        </strong>
                      </li>
                      <li>
                        Both React Websites were built on single NodeJs backend
                        server, One websie is the admin website which controls
                        the data display on the main website to provide a smooth
                        and user friendly experience
                      </li>
                    </ul>
                  </span>
                </div>
                <div className="mb-[10px] flex justify-center w-[90%] overflow-auto hide-scrollbar">
                  <div className="flex flex-row gap-2 overflow-auto">
                    <CustomChip label="MongoDB" icon="/svgs/mongo.svg" />
                    <CustomChip
                      label="Javascript"
                      icon="/svgs/javascript.svg"
                    />
                    <CustomChip label="NodeJS" icon="/svgs/nodejs.svg" />
                    <CustomChip label="React" icon="/svgs/react.svg" />
                    <CustomChip label="PHP" icon="/svgs/php.svg" />
                    <CustomChip label="CodeIgniter 4" icon="/svgs/codeigniter.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-[40px] my-[10px] border-2 border-brandColor rounded">
            <div className="py-[20px] flex flex-row justify-center items-center grid md:grid-cols-3 grid-cols-1 gap-4">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/rbl.png"
                  className="text-center bg-white img-fluid w-[80%] m-4 p-2 rounded"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center md:items-start items-center text-white md:px-[20px] col-span-2">
                <div className="w-full flex md:flex-row flex-col items-center justify-between">
                  <div className="md:text-left">
                    <span className="text-xl font-bold">RBL Bank</span>
                  </div>
                  <div className="md:text-right font-bold">
                    <span>June 2023 - July 2023</span>
                  </div>
                </div>
                <div className="my-[10px]">
                  <span className="text-center text-lg">
                    Role :{" "}
                    <strong className="text-brandColor">Product Intern</strong>
                  </span>
                </div>
                <div className="mb-[10px] md:mx-0 mx-auto px-3 md:px-0">
                  <span className="flex justify-start items-center text-sm w-[300px]">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="max-w-[15px]"
                    />{" "}
                    <span className="flex mx-2">In Office , Mumbai</span>
                  </span>
                </div>
                <div className="mb-[10px] mx-auto text-wrap px-6 md:px-0">
                  <span className="text-center flex justify-center items-center text-sm">
                    <ul className="marker:text-brandColor list-disc text-left">
                      <li>
                        Conducted Competition Analysis for Super App Analyzed
                        competitive landscape for a super app combining MOBank
                        and MyCard App
                      </li>
                      <li>
                        Designed
                        <strong className="text-brandColor">
                          {" "}
                          Information Architecture{" "}
                        </strong>{" "}
                        and{" "}
                        <strong className="text-brandColor">
                          Flowcharts
                        </strong>{" "}
                        to outline and optimize user interactions and data flow.
                      </li>
                      <li>
                        Provided Product Design Inputs Contributed to UI (User
                        Interface) and UX (User Experience) design based on
                        analysis and research findings.
                      </li>
                    </ul>
                  </span>
                </div>
                <div className="mb-[10px] flex justify-center w-[90%] overflow-auto hide-scrollbar">
                  <div className="flex flex-row gap-2 overflow-auto">
                    <CustomChip label="Information Architecture" />
                    <CustomChip label="Benchmarking" />
                    <CustomChip label="Flow Charting" />
                    <CustomChip label="Competition Analysis" />
                    <CustomChip label="UX" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="mt-[100px] text-center flex flex-col justify-center">
          <h1 className="mb-5 text-white">
            Positions of{" "}
            <strong className="text-brandColor">Responsibility</strong>
          </h1>
          <div className="mx-[40px] my-[10px] border-2 border-brandColor rounded">
            <div className="py-[10px] flex flex-row justify-center items-center grid md:grid-cols-3 grid-cols-1 gap-4">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/IET.png"
                  className="text-center bg-white img-fluid w-[40%] m-4 p-2 rounded"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center md:items-start items-center text-white md:px-[20px] col-span-2">
                <h5 className="text-brandColor font-bold">
                  IET ( Institution of Engineering and Technology ) Mpstme.
                </h5>
                <div className="px-[15px]">
                  <CustomStepper steps={ietSteps} currentStep={0} />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-[40px] my-[10px] border-2 border-brandColor rounded">
            <div className="py-[20px] flex flex-row justify-center items-center grid md:grid-cols-3 grid-cols-1 gap-4">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/GDSC.png"
                  className="text-center bg-white img-fluid w-[50%] m-4 p-2 rounded"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center md:items-start text-white px-[10px] md:px-[20px] col-span-2">
                <h5 className="text-brandColor font-bold">
                  Google Developers Students Club MPSTME
                </h5>
                <div className="px-[15px]">
                  <CustomStepper steps={gdscSteps} currentStep={0} />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-[40px] my-[10px] border-2 border-brandColor rounded">
            <div className="py-[20px] flex flex-row justify-center items-center grid md:grid-cols-3 grid-cols-1 gap-4">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/tq.jpg"
                  className="text-center bg-white img-fluid w-[20%] m-4 p-2 rounded"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center md:items-start text-white px-[10px] md:px-[20px] col-span-2">
                <h5 className="text-brandColor font-bold">
                  Taqeeq ( Annual Techfest , NMIMS MPSTME)
                </h5>
                <div className="px-[15px]">
                  <CustomStepper steps={taqeeqSteps} currentStep={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default page;
