"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/lib/site";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_rgba(7,20,38,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <Logo dark={!scrolled} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item, i) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenIndex(i)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-navy-700 hover:text-navy-900"
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
                {"children" in item && item.children && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                )}
              </Link>
              <AnimatePresence>
                {"children" in item && item.children && openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full w-64 rounded-2xl border border-navy-900/8 bg-white p-2 shadow-[0_20px_60px_-20px_rgba(7,20,38,0.25)]"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/rfq" size="sm">
            Request a Quote
          </Button>
        </div>

        <button
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
            scrolled ? "text-navy-900" : "text-white"
          )}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-navy-900/8 bg-white lg:hidden"
          >
            <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
              {navigation.map((item) => (
                <div key={item.label} className="border-b border-navy-900/5 py-2">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-base font-medium text-navy-900"
                  >
                    {item.label}
                  </Link>
                  {"children" in item && item.children && (
                    <div className="ml-3 flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-1.5 text-sm text-navy-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button href="/rfq" className="mt-4 w-full">
                Request a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
