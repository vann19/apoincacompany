import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Layanan apa saja yang tersedia?',
    a: 'Kami membuat tiga jenis sistem: website profil sekolah, aplikasi absensi guru berbasis QR dan geolocation, serta aplikasi pengelolaan stok gudang untuk UMKM.',
  },
  {
    q: 'Apa isi website profil sekolah?',
    a: 'Biasanya berisi profil dan visi misi sekolah, data guru dan fasilitas, berita atau pengumuman, galeri kegiatan, serta informasi pendaftaran siswa baru. Isinya bisa disesuaikan dengan kebutuhan sekolah.',
  },
  {
    q: 'Bagaimana cara kerja absensi guru dengan QR dan geolocation?',
    a: 'Guru memindai kode QR di sekolah lewat HP, lalu sistem mengecek lokasi guru. Absensi hanya tercatat jika guru berada di area sekolah, sehingga data kehadiran lebih akurat.',
  },
  {
    q: 'Apakah rekap absensi guru bisa dilihat dan diunduh?',
    a: 'Bisa. Admin dapat melihat kehadiran harian maupun bulanan, lalu mengunduh rekapnya untuk keperluan laporan sekolah.',
  },
  {
    q: 'Apa manfaat aplikasi stok gudang untuk UMKM?',
    a: 'Anda bisa mencatat barang masuk dan keluar, memantau sisa stok secara langsung, dan mendapat peringatan saat stok hampir habis, sehingga lebih jarang kehabisan atau kelebihan barang.',
  },
  {
    q: 'Apakah sistem bisa disesuaikan dengan kebutuhan kami?',
    a: 'Bisa. Kita diskusikan dulu alur kerja dan kebutuhan Anda di sesi konsultasi, lalu fitur dan tampilan disesuaikan. Biaya dan lama pengerjaan tergantung kompleksitasnya.',
  },
]

const FaqList = () => (
  <Accordion className="w-full">
    {faqs.map((item, i) => (
      <AccordionItem key={i} value={`item-${i}`}>
        <AccordionTrigger className="text-left text-lg font-semibold text-primary">
          {item.q}
        </AccordionTrigger>
        <AccordionContent className="text-base leading-relaxed text-primary/80">
          {item.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
)

const Pertanyaan = () => {
  return (
    <>
      {/* mobile */}
      <section className="px-6 pb-8 pt-6 md:hidden">
        <h2 className="mb-6 text-center text-3xl font-semibold leading-snug text-primary">
          Pertanyaan yang sering ditanyakan customer
        </h2>
        <FaqList />
      </section>

      {/* desktop | tablet */}
<section className="hidden px-6 py-12 md:block">
  <div className="mx-auto max-w-7xl px-10 lg:px-20">
    <h2 className="mx-auto mb-12 max-w-xl text-center text-4xl font-semibold text-primary">
      Pertanyaan yang sering ditanyakan customer
    </h2>
    <FaqList />
  </div>
</section>
    </>
  )
}

export default Pertanyaan