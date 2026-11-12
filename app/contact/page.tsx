import type { Metadata } from 'next'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import PageHeader from '@/components/Page/PageHeader'
import Footer from '@/components/Home/Footer'

export const metadata: Metadata = {
  title: 'Contact | Apoinca Sultra',
  description: 'Hubungi PT Apoinca Sultra untuk konsultasi website sekolah dan UMKM.',
}

const contacts = [
  { icon: MdPhone, label: 'Telepon', text: '+62 812-3456-7890', href: 'tel:+6281234567890' },
  { icon: MdEmail, label: 'Email', text: 'halo@namabrand.com', href: 'mailto:halo@namabrand.com' },
  { icon: MdLocationOn, label: 'Alamat', text: 'Surabaya, Jawa Timur', href: undefined },
]

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Hubungi Kami"
        desc="Ceritakan kebutuhan sekolah atau usaha Anda. Kami bantu dari konsultasi awal sampai website online."
      />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3 md:px-10 lg:px-20">
          {contacts.map(({ icon: Icon, label, text, href }) => (
            <div key={label} className="rounded-xl border bg-card p-6">
              <Icon className="mb-3 text-3xl text-primary" />
              <h2 className="text-sm font-medium text-muted-foreground">{label}</h2>
              {href ? (
                <a href={href} className="mt-1 block text-lg font-semibold text-primary hover:underline">
                  {text}
                </a>
              ) : (
                <p className="mt-1 text-lg font-semibold text-primary">{text}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-7xl md:px-10 lg:px-20">
          <a
            href="https://wa.me/6281234567890"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-putih transition-colors hover:bg-latar"
          >
            <FaWhatsapp className="text-lg" />
            Chat via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
