"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";

const fieldClass =
  "w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
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
          Message sent
        </h3>
        <p className="max-w-sm text-sm text-navy-600">
          Thanks for reaching out — a member of our team will respond
          shortly.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">Full Name</span>
          <input className={fieldClass} placeholder="Jane Doe" {...register("name")} />
          {errors.name && <span className="mt-1.5 block text-xs text-red-600">{errors.name.message}</span>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-800">Email</span>
          <input type="email" className={fieldClass} placeholder="jane@company.com" {...register("email")} />
          {errors.email && <span className="mt-1.5 block text-xs text-red-600">{errors.email.message}</span>}
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">Subject</span>
        <input className={fieldClass} placeholder="How can we help?" {...register("subject")} />
        {errors.subject && <span className="mt-1.5 block text-xs text-red-600">{errors.subject.message}</span>}
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-800">Message</span>
        <textarea rows={5} className={fieldClass} placeholder="Tell us more..." {...register("message")} />
        {errors.message && <span className="mt-1.5 block text-xs text-red-600">{errors.message.message}</span>}
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message. Please try again or
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
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
