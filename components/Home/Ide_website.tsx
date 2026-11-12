import React from 'react'
import type { IconType } from 'react-icons'
import {
  MdOutlineChatBubbleOutline,
  MdOutlineDesignServices,
  MdOutlineCode,
  MdOutlineRocketLaunch,
} from 'react-icons/md'

const steps = [
  {
    icon: MdOutlineChatBubbleOutline,
    title: 'Konsultasi',
    desc: 'Kita diskusikan tujuan bisnis, target pelanggan, dan kebutuhan website Anda agar arah pengerjaan jelas sejak awal.',
  },
  {
    icon: MdOutlineDesignServices,
    title: 'Desain',
    desc: 'Kami rancang tampilan yang rapi dan sesuai identitas usaha Anda, lalu Anda bisa mengecek dan memberi masukan.',
  },
  {
    icon: MdOutlineCode,
    title: 'Pengembangan',
    desc: 'Desain yang disetujui kami bangun menjadi website yang cepat, responsif, dan nyaman dibuka di HP maupun laptop.',
  },
  {
    icon: MdOutlineRocketLaunch,
    title: 'Peluncuran',
    desc: 'Website diuji, dipasang di domain Anda, dan siap dikunjungi pelanggan, lengkap dengan panduan penggunaannya.',
  },
]

const StepItem = ({
  step,
  index,
}: {
  step: { icon: IconType; title: string; desc: string }
  index: number
}) => {
  const Icon = step.icon

  return (
    <div className="flex flex-col">
      <Icon className="mb-3 text-4xl text-primary" />
      <div className="mb-4 w-40 border-t-2 border-primary/60" />
      <span className="text-base font-semibold text-primary">
        Langkah {index + 1}
      </span>
      <h3 className="mt-1 text-2xl font-semibold text-primary">
        {step.title}
      </h3>
      <p className="mt-2 max-w-[260px] text-base leading-relaxed text-primary/80">
        {step.desc}
      </p>
    </div>
  )
}

const Ide_website = () => {
  return (
    <>
      {/* mobile */}
      <section className="px-6 pb-8 pt-6 md:hidden">
        <h1 className="mb-8 text-3xl font-semibold leading-snug text-primary">
          Dari ide sampai website online
        </h1>

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <StepItem key={i} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* desktop | tablet */}
      <section className="hidden px-6 py-12 md:block">
        <div className="mx-auto max-w-7xl px-10 lg:px-20">
          <h2 className="mb-12 max-w-md text-4xl font-semibold text-primary">
            Dari ide sampai website online
          </h2>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {steps.map((step, i) => (
              <StepItem key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Ide_website