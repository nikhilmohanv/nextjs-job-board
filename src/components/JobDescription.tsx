import { Job } from "@prisma/client";
import TextMarkdown from "./TextMarkdown";
import { Button } from "./ui/button";
import Image from "next/image";
import { relativeDate } from "@/lib/utils";
interface JobDescriptionProps {
  job: Job;
}
export default function JobDescription({
  job: {
    title,
    description,
    companyLogoUrl,
    companyName,
    applicationUrl,
    applicationEmail,
    type,
    location,
    locationType,
    salary,
    createdAt,
  },
}: JobDescriptionProps) {
  return (
    <>
      <div className="mx-auto max-w-screen-laptop px-4 lg:p-0 container">
        {companyLogoUrl && (
          <div className="job-detail-banner h-24 rounded-3xl relative">
            <Image
              alt={`${companyName} logo`}
              loading="lazy"
              width="100"
              height="100"
              className="rounded-2xl absolute -bottom-10 left-10 border-4 border-gray-100"
              style={{ color: "transparent" }}
              src={companyLogoUrl}
            />
          </div>
        )}
        <div
          className="flex justify-between items-center mt-16 mb-16 "
          style={{ visibility: "visible" }}
        >
          <div>
            <span className="text-pgray-400 text-base">{companyName}</span>
            <h2 className="text-2xl font-bold">{title}</h2>
            <div>
              <span className=" flex items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="mr-1"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                </svg>
                {location || "world wide"}
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <a
                className="border h-10 w-10 rounded-full flex items-center justify-center mr-3"
                href=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
                </svg>
              </a>

              <Button className="px-6 py-2  rounded-lg">Apply Now</Button>
            </div>
            <p className="text-right mt-3 text-gray-500 text-sm">
              {relativeDate(createdAt)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 gap-16 mb-24 ">
          <div className="lg:col-span-5 xl:col-span-5">
            <TextMarkdown>{description || ""}</TextMarkdown>
            <Button className="mt-5 transition rounded-lg">Apply Now</Button>
          </div>
        </div>
      </div>
    </>
  );
}
