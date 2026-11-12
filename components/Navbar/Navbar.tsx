"use client";

import Image from "next/image";
import React, { useState } from "react";

const links = ["Home", "About", "Portofolio", "Blog", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
            open ? "max-h-64 border-t border-latar" : "max-h-0"
          }`}
        >
          {["Home", "Layanan", "Portofolio", "Kontak"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 font-medium text-primary hover:bg-latar hover:text-putih"
              >
                {item}
              </a>
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
            {links.map((item, i) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`pb-1 text-xs font-medium transition-colors ${
                    i === 0
                      ? "border-b-2 border-primary text-primary"
                      : "text-latar hover:text-primary"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Login (kanan) */}
          <div className="flex justify-end">
            <a
              href="#login"
              className="rounded-lg bg-primary px-8 py-2 text-xs font-semibold text-putih transition-colors hover:bg-latar"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;