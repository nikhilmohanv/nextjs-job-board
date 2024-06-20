interface JobPageProps {
  // title: string;
  // description?: string;
  // companyLogoUrl?: string;
  // salary: number;
  // location?: string;
  // createdAt: Date;
  // companyName: string;
  // slug: string;
  job: Job;
}
import { currencyFormat, relativeDate } from "@/lib/utils";
import { Badge } from "./ui/badge";

import Image from "next/image";
import { Job } from "@prisma/client";
export default function JobPage({
  job: {
    title,
    createdAt,
    companyLogoUrl,
    companyName,
    salary,
    location,
    locationType,
    slug,
    type,
  },
}: JobPageProps) {
  console.log(createdAt);
  return (
    // <li>
    <div className="mb-2 flex flex-col justify-between border-b border-gray-400 py-3 transition-all duration-100 ease-linear md:flex-row">
      <div className="flex flex-row">
        {companyLogoUrl && (
          <div className="w-12 mr-4">
            <Image
              alt={`${companyName} company logo`}
              loading="lazy"
              src={companyLogoUrl}
              height="46"
              width="46"
              className="block rounded-lg border border-gray-300"
            />
          </div>
        )}

        <div className=" flex-1">
          <div className="mb-1">{title}</div>
          <div className="text-sm">
            <span>{companyName} • </span>
            <span className="text-gray-700">
              {location ? location : "World Wide"} • {currencyFormat(salary)} •{" "}
              {relativeDate(createdAt)}
              {/* {equity && ` • ${equity}`}  */}
            </span>
          </div>
        </div>
      </div>
      <div className="ml-16 mt-4 flex items-center md:ml-0 md:mt-0">
        <button
          className=" rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50 transition duration-200 px-4 py-2 bg-white border-black text-black disabled:bg-white disabled:border-gray-700 disabled:text-gray-700 hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500"
          type="button"
        >
          Apply
        </button>
        {/* <button
          className=" !ml-2  rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50 transition duration-200 px-4 py-2 bg-black border-black text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 hover:bg-gtmblue-500 hover:border-gtmblue-500"
          type="button"
        >
          Apply
        </button> */}
      </div>
    </div>
    // </li>
  );
}
