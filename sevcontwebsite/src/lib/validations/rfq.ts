import { z } from "zod";

export const rfqSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  company: z.string().min(2, "Enter your company name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  country: z.string().min(2, "Enter your country"),
  service: z.string().min(1, "Select a service category"),
  quantity: z.string().optional(),
  targetDate: z.string().optional(),
  details: z.string().min(20, "Please provide at least a few sentences of detail"),
});

export type RfqFormValues = z.infer<typeof rfqSchema>;
