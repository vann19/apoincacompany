import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/Page/PageHeader'
import Footer from '@/components/Home/Footer'
import { slides } from '@/components/Home/Slide'

export const metadata: Metadata = {
  title: 'Portofolio | Apoinca Sultra',
  description: 'Contoh hasil karya Apoinca Sultra untuk sekolah dan UMKM.',
}

export default function PortofolioPage() {
  return (
    <main>
      <PageHeader
        title="Portofolio"
        desc="Beberapa contoh hasil karya kami untuk sekolah dan UMKM di Sulawesi Tenggara."
      />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-20">
          {slides.map((s, i) => (
            <div key={`${s.title}-${i}`} className="overflow-hidden rounded-xl border bg-card">
              <div className="relative aspect-video w-full">
                <Image
                  src={s.src}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-primary">{s.title}</h2>
                <p className="mt-1 text-sm text-primary/80">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
