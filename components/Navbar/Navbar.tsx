"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Price", href: "/price" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <>
      {/* ================= MOBILE ================= */}
      <nav className="relative bg-hijau px-6 py-4 md:hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold text-primary">
              PT Apoinca Sultra
            </h1>
            <Image
              src="/img/logo1.png"
              alt="Logo Apoinca Sultra"
              width={36}
              height={36}
            />
          </div>

          {/* Tombol hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-primary transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-primary transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-primary transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Menu dropdown */}
        <ul
          className={`absolute left-0 top-full z-50 w-full overflow-hidden bg-hijau shadow-md transition-all duration-300 ${
            open ? "max-h-96 border-t border-latar" : "max-h-0"
          }`}
        >
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="block px-6 py-3 font-medium text-primary hover:bg-latar hover:text-putih"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= TABLET & DESKTOP ================= */}
      <nav className="hidden px-6 pt-4 md:block">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center rounded-2xl bg-hijau px-10 py-4">
          {/* Logo (kiri) */}
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-primary">
              PT Apoinca Sultra
            </span>
            <Image
              src="/img/logo1.png"
              alt="Logo Apoinca Sultra"
              width={32}
              height={32}
            />
          </div>

          {/* Menu (tengah) */}
          <ul className="flex items-center justify-center gap-8">
            {links.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`pb-1 text-xs font-medium transition-colors ${
                      active
                        ? "border-b-2 border-primary text-primary"
                        : "text-latar hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hubungi Kami (kanan) */}
          <div className="flex justify-end">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-8 py-2 text-xs font-semibold text-putih transition-colors hover:bg-latar"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
