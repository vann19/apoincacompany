export type Post = {
  slug: string
  category: string
  title: string
  desc: string
  image: string
  content: string[]
}

export const posts: Post[] = [
  {
    slug: 'website-profil-sekolah-yang-rapi',
    category: 'Sekolah',
    title: 'Mengapa Sekolah Perlu Website Profil yang Rapi',
    desc: 'Website profil membantu orang tua calon siswa menemukan informasi sekolah dengan cepat dan percaya.',
    image: '/img/slide-1.jpg',
    content: [
      'Calon orang tua siswa biasanya mencari informasi sekolah lewat internet sebelum datang langsung. Website profil yang rapi membuat mereka cepat menemukan visi misi, fasilitas, dan informasi pendaftaran.',
      'Website juga memudahkan sekolah menyampaikan berita dan pengumuman tanpa harus mencetak banyak selebaran. Cukup perbarui konten, dan informasi langsung terlihat oleh semua orang.',
    ],
  },
  {
    slug: 'absensi-guru-qr-dan-lokasi',
    category: 'Absensi',
    title: 'Absensi Guru Berbasis QR dan Lokasi',
    desc: 'Cara kerja absensi yang hanya sah di area sekolah dan bagaimana rekapnya membantu pelaporan.',
    image: '/img/slide-2.jpg',
    content: [
      'Guru memindai kode QR yang ada di sekolah menggunakan HP. Sistem kemudian memeriksa lokasi guru, dan absensi hanya tercatat jika guru berada di area sekolah.',
      'Admin bisa melihat kehadiran harian maupun bulanan, lalu mengunduh rekapnya untuk laporan sekolah tanpa perlu menghitung manual.',
    ],
  },
  {
    slug: 'mulai-mencatat-stok-gudang',
    category: 'UMKM',
    title: 'Mulai Mencatat Stok Gudang dengan Rapi',
    desc: 'Langkah sederhana untuk memantau barang masuk, barang keluar, dan sisa stok setiap hari.',
    image: '/img/slide-3.jpg',
    content: [
      'Banyak usaha kecil kehabisan barang atau kelebihan stok karena pencatatan masih di kertas. Langkah pertama adalah mencatat setiap barang masuk dan keluar di satu tempat.',
      'Dengan aplikasi stok gudang, sisa stok terlihat secara langsung dan peringatan muncul saat barang hampir habis, sehingga pembelian ulang bisa direncanakan lebih baik.',
    ],
  },
]

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug)
