import type { Metadata } from 'next'
import BlogList from '@/components/Blog/BlogList'
import PageHeader from '@/components/Page/PageHeader'
import Footer from '@/components/Home/Footer'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Apoinca Sultra',
  description: 'Artikel seputar website, digitalisasi sekolah, dan pengelolaan usaha UMKM.',
}

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="Blog"
        desc="Artikel dan tips seputar website, digitalisasi sekolah, dan pengelolaan usaha."
      />

      <section className="px-6 py-12">
        <BlogList posts={posts} />
      </section>

      <Footer />
    </main>
  )
}
