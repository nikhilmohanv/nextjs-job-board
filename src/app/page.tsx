import JobPage from "@/components/JobPage";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { relativeDate } from "@/lib/utils";

export default async function Dashboard() {
  const jobs = await prisma.job.findMany();
  // const jobs = [
  //   {
  //     title: "dfd",
  //     description: "faddfa",
  //     companyLogoUrl: "faa.com",
  //     company: "faa",
  //     salary: 34333,
  //     createdAt: new Date("23/12/2024"),
  //     location: "Kochi",
  //     companyName: "dfd",
  //   },
  //   {
  //     title: "dfd",
  //     description: "faddfa",
  //     companyLogoUrl: "faa.com",
  //     company: "faa",
  //     salary: 34333,
  //     createdAt: new Date("23/12/2024"),
  //     location: "Kochi",
  //     companyName: "dfd",
  //   },
  // ];
  return (
    <>
      {/* <JobCard
          companyLogo="https://photos.wellfound.com/startups/i/8887646-f35c5c1d88595ca051fddbec6e486edd-medium_jpg.jpg"
          companyName="Chalk"
          jobTitle="Machine Learning Engineer - NYC"
          jobLink="/jobs/3036171-machine-learning-engineer-nyc"
          location="New York City"
          salary="$120k – $200k"
          postedTime="yesterday"
        /> */}

      {/* </div> */}

      <div className="mb-16 container mx-auto">
        {/* <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">Engineering jobs</h3>
          <a
            className="ml-auto text-black underline hover:text-gtmblue-500"
            href="/role/l/software-engineer/united-states"
          >
            View all engineering jobs
          </a>
        </div> */}
        {jobs.map((job, index) => (
          <Link href={`/jobs/${job.slug}`} key={index}>
            <JobPage job={job} />
          </Link>
        ))}
      </div>
    </>
  );
}

// const JobCard = ({
//   companyLogo,
//   companyName,
//   jobTitle,
//   jobLink,
//   location,
//   salary,
//   equity,
//   postedTime,
// }) => (
//   <div className="mb-2 flex flex-col justify-between border-b border-gray-400 py-3 transition-all duration-100 ease-linear md:flex-row">
//     <div className="flex flex-row">
//       <div className="w-12">
//         <a
//           className="styles_component__UCLp3 styles_defaultLink__eZMqw no-underline"
//           href="#"
//         >
//           <img
//             alt={`${companyName} company logo`}
//             loading="lazy"
//             src={companyLogo}
//             height="46"
//             width="46"
//             className="block rounded-lg border border-gray-300"
//           />
//         </a>
//       </div>
//       <div className="ml-4 flex-1">
//         <div className="mb-1">
//           <a
//             className="styles_component__UCLp3 styles_defaultLink__eZMqw mr-2 font-bold !text-black !decoration-black"
//             href={jobLink}
//           >
//             {jobTitle}
//           </a>
//         </div>
//         <div className="text-sm">
//           <span>{companyName} • </span>
//           <span className="text-gray-700">
//             {location} • {salary}
//             {equity && ` • ${equity}`} • {postedTime}
//           </span>
//         </div>
//       </div>
//     </div>
//     <div className="ml-16 mt-4 flex items-center md:ml-0 md:mt-0">
//       <button
//         className="styles-module_component__88XzG styles_component__sMuDw styles_secondary__iAX9L rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50 transition duration-200 px-4 py-2 bg-white border-black text-black disabled:bg-white disabled:border-gray-700 disabled:text-gray-700 hover:bg-gtmblue-100 hover:border-gtmblue-500 hover:text-gtmblue-500"
//         type="button"
//       >
//         Save
//       </button>
//       <button
//         className="styles-module_component__88XzG styles_component__Ov6jE !ml-2 styles_component__sMuDw rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50 transition duration-200 px-4 py-2 bg-black border-black text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 hover:bg-gtmblue-500 hover:border-gtmblue-500"
//         type="button"
//       >
//         Apply
//       </button>
//     </div>
//   </div>
// );
