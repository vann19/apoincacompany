import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MdArrowBack } from 'react-icons/md'
import Footer from '@/components/Home/Footer'
import { getPostBySlug, posts } from '@/lib/blog'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Artikel tidak ditemukan | Apoinca Sultra' }
  return {
    title: `${post.title} | Apoinca Sultra`,
    description: post.desc,
  }
}

function ArticleSkeleton() {
  return (
    <article className="px-6 py-12" aria-label="Memuat artikel">
      <div className="mx-auto max-w-3xl animate-pulse">
        <div className="h-5 w-32 rounded bg-hijau" />
        <div className="mt-8 h-4 w-24 rounded bg-hijau" />
        <div className="mt-3 h-10 w-full rounded bg-hijau" />
        <div className="mt-3 h-5 w-4/5 rounded bg-hijau" />
        <div className="mt-8 aspect-video w-full rounded-xl bg-hijau" />
      </div>
    </article>
  )
}

async function Article({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-latar hover:text-primary"
        >
          <MdArrowBack />
          Kembali ke blog
        </Link>

        <p className="mt-6 text-sm font-medium text-latar">{post.category}</p>
        <h1 className="mt-2 text-3xl font-semibold leading-snug text-primary md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-primary/80 md:text-lg">
          {post.desc}
        </p>

        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-primary/90">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function BlogPostPage({ params }: Props) {
  return (
    <main>
      <Suspense fallback={<ArticleSkeleton />}>
        <Article params={params} />
      </Suspense>
      <Footer />
    </main>
  )
}
