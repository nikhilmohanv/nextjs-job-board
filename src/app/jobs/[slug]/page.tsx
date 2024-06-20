import JobDescription from "@/components/JobDescription";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
export default async function JobDetails({
  params,
}: {
  params: { slug: string };
}) {
  const JobDetails = await prisma.job.findUnique({
    where: {
      slug: params.slug,
      approved: true,
    },
  });
  if (!JobDetails) {
    notFound();
  }
  return (
    <>
      <JobDescription job={JobDetails} />
    </>
  );
}
