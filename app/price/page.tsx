import type { Metadata } from 'next'
import { MdCheckCircle } from 'react-icons/md'
import PageHeader from '@/components/Page/PageHeader'
import Footer from '@/components/Home/Footer'
import { packages } from '@/components/Home/Paket'
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

export const metadata: Metadata = {
  title: 'Price | Apoinca Sultra',
  description: 'Daftar paket dan harga jasa pembuatan website dan aplikasi Apoinca Sultra.',
}

export default function PricePage() {
  return (
    <main>
      <PageHeader
        title="Paket dan Harga"
        desc="Harga di bawah adalah harga mulai dari. Biaya final menyesuaikan kebutuhan dan kompleksitas sistem Anda."
      />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-20">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`flex h-full flex-col ${pkg.popular ? 'ring-2 ring-primary' : ''}`}
            >
              <CardHeader>
                {pkg.popular && (
                  <CardAction>
                    <Badge variant="default">Populer</Badge>
                  </CardAction>
                )}
                <CardTitle className="text-xl text-primary">{pkg.name}</CardTitle>
                <CardDescription>{pkg.desc}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">Mulai dari</p>
                <p className="mb-4 text-2xl font-semibold text-primary">{pkg.price}</p>
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
                <Button className="w-full">Pilih Paket</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
