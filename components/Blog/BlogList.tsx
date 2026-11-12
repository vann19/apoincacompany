"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Search from "@/components/Blog/Search"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Post } from "@/lib/blog"

export default function BlogList({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("")

  const keyword = query.trim().toLowerCase()
  const filtered = keyword
    ? posts.filter((p) =>
        [p.title, p.desc, p.category].some((text) =>
          text.toLowerCase().includes(keyword)
        )
      )
    : posts

  return (
    <>
      <div className="mx-auto mb-8 max-w-7xl md:px-10 lg:px-20">
        <Search value={query} onChange={setQuery} />
      </div>

      {filtered.length === 0 ? (
        <p className="mx-auto max-w-7xl text-center text-base text-primary/80 md:px-10 lg:px-20">
          Tidak ada artikel yang cocok dengan &quot;{query}&quot;.
        </p>
      ) : (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-20">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block focus:outline-none focus-visible:ring-4 focus-visible:ring-hijau rounded-xl"
            >
              <Card className="flex h-full min-h-96 flex-col overflow-hidden p-0 transition-shadow group-hover:shadow-md">
                <div className="relative aspect-video w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader className="gap-2 px-6 pt-6">
                  <p className="text-sm font-medium text-latar">{post.category}</p>
                  <CardTitle className="text-xl text-primary">{post.title}</CardTitle>
                  <CardDescription>{post.desc}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto px-6 pb-6 pt-4">
                  <span className="text-sm font-semibold text-primary group-hover:underline">
                    Baca selengkapnya
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
