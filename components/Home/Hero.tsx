import Image from "next/image";
import React from "react";



const Hero = () => {
  return (
    <>
      {/* ================= MOBILE ================= */}
      <section className="bg-hijau px-6 pb-2 pt-6 md:hidden">
        <h2 className="text-2xl font-semibold leading-snug text-primary">
          Jasa Pembuatan Website Profil Sekolah dan UMKM di seluruh Indonesia
        </h2>

        <p className="mt-4 max-w-[60%] text-xs text-latar">
          Apoinca Sultra membantu bisnis di Sulawesi Tenggara tampil profesional
          di internet, dari company profile sampai toko online.
        </p>

        <div className="relative mt-8 flex items-end justify-between">
          <a
            href="#kontak"
            className="mb-10 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-putih hover:bg-latar"
          >
            Gabung Sekarang
          </a>

          <Image
            src="/img/cursor1.png"
            alt="cursor"
            width={200}
            height={260}
            className="absolute bottom-[-6px] left-24 z-10 h-auto w-10"
          />

          <Image
            src="/img/person_mobile1.png"
            alt="Konsultan Apoinca Sultra"
            width={200}
            height={260}
            className="absolute bottom-[-7px] right-0 h-auto w-40"
          />
        </div>
      </section>

      {/* ================= TABLET & DESKTOP ================= */}
      <section className="hidden px-6 py-12 md:block">
        <div className="mx-auto flex h-100 max-w-7xl overflow-hidden rounded-2xl bg-hijau px-10 lg:px-20">
          {/* Kolom teks */}
          <div className="relative flex w-[36%] flex-col justify-center">
            <h2 className="text-2xl font-semibold leading-snug text-primary lg:text-[28px]">
              Jasa Pembuatan Website Profil Sekolah dan UMKM di seluruh
              indonesia
            </h2>

            <p className="mt-3 max-w-xs text-xs leading-relaxed text-latar">
              Apoinca Sultra membantu bisnis di Sulawesi Tenggara tampil
              profesional di internet, dari company profile sampai toko online.
            </p>

            <a
              href="#kontak"
              className="mt-5 w-fit rounded-xl bg-latar px-6 py-3 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-putih"
            >
              Gabung Sekarang
            </a>

            <Image
              src="/img/cursor1.png"
              alt="cursor"
              width={40}
              height={40}
              className="absolute bottom-6 left-24 h-auto w-5"
            />
          </div>

          {/* Kolom foto + lingkaran */}
          <div className="relative w-[28%]">
            <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-primary" />
            <div className="absolute left-0 top-36 h-28 w-28 rounded-full bg-primary" />
         

            <Image
              src="/img/person_dekstop.png"
              alt="Konsultan Apoinca Sultra"
              width={300}
              height={400}
              priority
              className="absolute bottom-0 left-1/2 h-auto w-64 max-w-none -translate-x-1/2"
            />
          </div>

          {/* Kolom bar layanan */}
            <div className="flex flex-1 items-end justify-end">
            <Image
                src="/img/info.png"
                alt="Info bar"
                width={400}
                height={320}
                priority
                className="h-auto max-h-full w-full max-w-md object-contain object-bottom"
            />
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;