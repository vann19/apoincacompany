import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowForward } from 'react-icons/md'
import Footer from '@/components/Home/Footer'
import { slides } from '@/components/Home/Slide'

export const metadata: Metadata = {
  title: 'About | Apoinca Sultra',
  description: 'Tentang PT Apoinca Sultra, jasa pembuatan website dan aplikasi untuk sekolah dan UMKM.',
}

const values = [
  {
    title: 'Rapi',
    desc: 'Setiap website dan aplikasi disusun dengan struktur yang jelas dan tampilan yang tertata.',
  },
  {
    title: 'Mudah dipakai',
    desc: 'Dirancang agar mudah dipahami oleh admin dan pengguna sehari-hari.',
  },
  {
    title: 'Siap dikembangkan',
    desc: 'Sistem bisa ditambah fitur seiring berkembangnya sekolah atau usaha Anda.',
  },
]

const services = slides.filter((_, i) => i < 3)

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-8 sm:py-16 md:grid-cols-2 md:px-10 lg:px-20 xl:gap-16">
        <div className="hidden md:block">
          <Image
            src="/img/personhd.png"
            alt="Tim Apoinca Sultra"
            width={600}
            height={800}
            className="h-auto w-full"
          />
        </div>

        <div className="mt-4 md:mt-0">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-primary">
            Kami membantu sekolah dan UMKM tampil profesional di internet.
          </h1>
          <p className="mb-6 text-base leading-relaxed text-primary/80 md:text-lg">
            Apoinca Sultra adalah tim pembuat website dan aplikasi di Sulawesi Tenggara.
            Dari website profil sekolah, absensi guru berbasis QR dan lokasi, sampai
            pengelolaan stok gudang, kami membangun sistem yang rapi, mudah dipakai,
            dan siap dikembangkan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-putih transition-colors hover:bg-latar focus:outline-none focus:ring-4 focus:ring-hijau"
          >
            Hubungi Kami
            <MdArrowForward className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl md:px-10 lg:px-20">
          <h2 className="mb-8 text-2xl font-semibold text-primary md:text-3xl">
            Nilai kami
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border bg-card p-6">
                <h3 className="text-xl font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-primary/80">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl md:px-10 lg:px-20">
          <h2 className="mb-8 text-2xl font-semibold text-primary md:text-3xl">
            Layanan kami
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-primary/80">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
