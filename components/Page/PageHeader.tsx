import React from 'react'

type PageHeaderProps = {
  title: string
  desc: string
}

const PageHeader = ({ title, desc }: PageHeaderProps) => {
  return (
    <section className="px-6 pt-6 md:py-12">
      <div className="mx-auto max-w-7xl rounded-2xl bg-hijau px-6 py-10 md:px-10 md:py-14 lg:px-20">
        <h1 className="text-3xl font-semibold leading-snug text-primary md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary/80 md:text-lg">
          {desc}
        </p>
      </div>
    </section>
  )
}

export default PageHeader
