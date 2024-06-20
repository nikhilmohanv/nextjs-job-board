import { z } from "zod"
import { citiesList, jobType, locationType } from "./options";

const requiredString = z.string().min(0)
const companyLogo = z.custom<File | undefined>().refine(
    (file) => {
        !file || (file instanceof File && file.type.startsWith("image/"))
    }, "file should be image"
).refine((file) => {
    !file || file.size < 1024 * 1024 * 2;
}, "file should be less than 2MB")

const applicationSchema = z.object({
    applicationEmail: z.string().max(200).email().optional().or(z.literal("")),
    applicationUrl: z.string().max(200).url().optional().or(z.literal(""))
}).refine(data => data.applicationEmail || data.applicationUrl, {
    message: "Email or url is needed",
    path: ["applicationEmail"]
})

const locationSchema = z.object({
    locationType: requiredString.refine(
        (value) => locationType.includes(value), "Invalid location type"
    ),
    location: z.string().optional()

}).refine(
    (value) => value.locationType || value.locationType === "Remote" || value.location,
    {
        message: "Select a job location",
        path: ["location"]
    }
)

export const createJobSchema = z.object({
    title: requiredString.max(100),
    description: z.string().optional(),
    companyName: requiredString.max(50),
    companyLogo: companyLogo,
    type: requiredString.refine((value) => jobType.includes(value)),
    salary: requiredString.regex(/^\d+$/, "Must be number").max(10, "Number should be less than 10 digits"),

})
    .and(applicationSchema)
    .and(locationSchema)

export type CreateJobValues = z.infer<typeof createJobSchema>