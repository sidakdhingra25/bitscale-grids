import { GridColumn } from "@glideapps/glide-data-grid"

// Company logo mapping
export const companyLogos: Record<string, string> = {
  Google: "/google.png",
  Amazon: "/amazon.png",
  LinkedIn: "/linkedin.png",
  Microsoft: "/microsoft.png",
}

// Grid column definitions
export const columns: GridColumn[] = [
  { title: "Imported Data", width: 200, id: "name" },
  { title: "Last Updated At", width: 180, id: "date" },
  { title: "Company Name", width: 150, id: "company" },
  { title: "Company Website", width: 180, id: "website" },
  { title: "LinkedIn Job URL", width: 180, id: "linkedin" },
  { title: "Email Waterfall", width: 150, id: "status" },
  { title: "Email Address", width: 200, id: "email" },
  { title: "Job Title", width: 180, id: "jobTitle" },
  { title: "Location", width: 150, id: "location" },
  { title: "Phone Number", width: 150, id: "phone" },
  { title: "Tags", width: 150, id: "tags" },
  { title: "Priority", width: 100, id: "priority" },
  { title: "Source", width: 150, id: "source" },
  { title: "Notes", width: 200, id: "notes" },
  { title: "J", width: 30, id: "empty2" },
]
