"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { rfqSchema, type RfqFormValues } from "@/lib/validations/rfq";
import { services } from "@/content/services";
import { Button } from "@/components/ui/button";

const fieldClass =
  "w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20";

export function RfqForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RfqFormValues>({
    resolver: zodResolver(rfqSchema),
  });

  async function onSubmit(values: RfqFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-navy-900/8 bg-navy-50 p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold-500" />
        <h3 className="font-display text-xl font-semibold text-navy-900">
          Request received
        </h3>
        <p className="max-w-sm text-sm text-navy-600">
          Thank you — our team will review your requirement and respond
          within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message}>
          <input className={fieldClass} placeholder="Jane Doe" {...register("name")} />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input className={fieldClass} placeholder="Company Ltd." {...register("company")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            className={fieldClass}
            placeholder="jane@company.com"
            {...register("email")}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input className={fieldClass} placeholder="+20 100 000 0000" {...register("phone")} />
        </Field>
        <Field label="Country" error={errors.country?.message}>
          <input className={fieldClass} placeholder="Egypt" {...register("country")} />
        </Field>
        <Field label="Service Category" error={errors.service?.message}>
          <select className={fieldClass} defaultValue="" {...register("service")}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Estimated Quantity (optional)">
          <input className={fieldClass} placeholder="e.g. 500 units" {...register("quantity")} />
        </Field>
        <Field label="Target Delivery Date (optional)">
          <input type="date" className={fieldClass} {...register("targetDate")} />
        </Field>
      </div>

      <Field label="Project Details" error={errors.details?.message}>
        <textarea
          rows={5}
          className={fieldClass}
          placeholder="Describe your requirement, specifications, and any relevant standards..."
          {...register("details")}
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your request. Please try again or
          email us directly.
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Submit Request
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-800">{label}</span>
      {children}
      {error && <span className={cn("mt-1.5 block text-xs text-red-600")}>{error}</span>}
    </label>
  );
}
