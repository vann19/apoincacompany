import React from 'react'
import Link from 'next/link'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const menus = [
  { label: 'Beranda', href: '#' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Paket', href: '#paket' },
  { label: 'FAQ', href: '#faq' },
]

const services = [
  'Website Profil Sekolah',
  'Absensi Guru QR + Lokasi',
  'Stok Gudang UMKM',
]

const contacts = [
  { icon: MdPhone, text: '+62 812-3456-7890' },
  { icon: MdEmail, text: 'halo@namabrand.com' },
  { icon: MdLocationOn, text: 'Surabaya, Jawa Timur' },
]

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold">Nama Brand</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed opacity-80">
              Kami membantu sekolah dan UMKM memiliki sistem digital yang rapi,
              mudah dipakai, dan siap dikembangkan.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://wa.me/6281234567890"
                aria-label="WhatsApp"
                className="rounded-full border border-current/30 p-2 text-xl transition hover:bg-white/10"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/"
                aria-label="Instagram"
                className="rounded-full border border-current/30 p-2 text-xl transition hover:bg-white/10"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Menu</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {menus.map((m) => (
                <li key={m.label}>
                  <Link href={m.href} className="hover:underline">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Layanan</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Kontak</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {contacts.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  <Icon className="shrink-0 text-lg" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm opacity-70 md:text-center">
          © 2026 Nama Brand. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  )
}

export default Footer