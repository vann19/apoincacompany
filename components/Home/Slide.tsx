import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export const slides = [
  {
    src: '/img/slide-1.jpg',
    title: 'Website Profil Sekolah',
    desc: 'Tampilan resmi sekolah yang rapi dan mudah diperbarui.',
  },
  {
    src: '/img/slide-2.jpg',
    title: 'Absensi Guru QR + Lokasi',
    desc: 'Absensi hanya sah ketika guru berada di area sekolah.',
  },
  {
    src: '/img/slide-3.jpg',
    title: 'Stok Gudang UMKM',
    desc: 'Pantau barang masuk dan keluar langsung dari HP.',
  },
  {
    src: '/img/slide-2.jpg',
    title: 'Dashboard Admin',
    desc: 'Semua data dan laporan dalam satu tampilan.',
  },
]

const Slide = () => {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl md:px-10 lg:px-20">
        <h2 className="mx-auto mb-10 max-w-xl text-center text-3xl font-semibold leading-snug text-primary md:mb-12 md:text-4xl">
          Contoh hasil karya kami
        </h2>

        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent>
            {slides.map((s) => (
              <CarouselItem key={s.title} className="md:basis-1/2 lg:basis-1/3">
                <div className="overflow-hidden rounded-xl border bg-card">
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
                    <h3 className="text-lg font-semibold text-primary">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-primary/80">{s.desc}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 z-10 lg:-left-12" />
          <CarouselNext className="right-2 z-10 lg:-right-12" />
        </Carousel>
      </div>
    </section>
  )
}

export default Slide