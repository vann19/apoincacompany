import React from 'react'
import { MdCheckCircle } from 'react-icons/md'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const packages = [
  {
    name: 'Profil Sekolah',
    desc: 'Website resmi sekolah yang rapi dan mudah diperbarui.',
    price: 'Rp 2.800.000',
    features: [
      'Profil, visi misi, dan fasilitas',
      'Data guru dan staf',
      'Berita dan pengumuman',
      'Galeri kegiatan',
      'Tampil rapi di HP dan laptop',
    ],
  },
  {
    name: 'Absensi Guru',
    desc: 'Absensi lewat QR dan lokasi, hanya sah di area sekolah.',
    price: 'Rp 5.500.000',
    features: [
      'Scan QR lewat HP guru',
      'Validasi lokasi (geolocation)',
      'Rekap harian dan bulanan',
      'Unduh laporan kehadiran',
      'Dashboard admin',
    ],
  },
  {
    name: 'Stok Gudang UMKM',
    desc: 'Pantau barang masuk dan keluar dengan mudah.',
    price: 'Rp 3.500.000',
    features: [
      'Catat barang masuk dan keluar',
      'Stok real-time',
      'Peringatan stok menipis',
      'Laporan stok',
      'Bisa diakses dari HP',
    ],
  },
  {
    name: 'Paket Lengkap',
    desc: 'Gabungan layanan sekolah dalam satu paket hemat.',
    price: 'Rp 7.000.000',
    popular: true,
    features: [
      'Website profil sekolah',
      'Sistem absensi guru QR + lokasi',
      'Konsultasi dan pendampingan',
      'Panduan penggunaan',
      'Prioritas perbaikan',
    ],
  },
]

const Paket = () => {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl md:px-10 lg:px-20">
        <h2 className="mx-auto mb-10 max-w-xl text-center text-3xl font-semibold leading-snug text-primary md:mb-12 md:text-4xl">
          Pilih paket yang sesuai kebutuhan Anda
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`flex h-full flex-col ${
                pkg.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              <CardHeader>
                {pkg.popular && (
                  <CardAction>
                    <Badge variant="default">Populer</Badge>
                  </CardAction>
                )}
                <CardTitle className="text-xl text-primary">
                  {pkg.name}
                </CardTitle>
                <CardDescription>{pkg.desc}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">Mulai dari</p>
                <p className="mb-4 text-2xl font-semibold text-primary">
                  {pkg.price}
                </p>
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <MdCheckCircle className="mt-0.5 shrink-0 text-lg text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={pkg.popular ? 'default' : 'default'}
                >
                  Pilih Paket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Paket