import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from './Logo'

export function Hero() {
  return (
    <div className="relative py-5 sm:py-10">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <Logo className="h-12 w-auto text-slate-900" />
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-500 sm:text-7xl">
            <span className="text-slate-800">Redefine </span>Possible
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-slate-800">
            <p>
              International Women&apos;s Day 2025
            </p>
          </div>
          <Button href="https://lu.ma/xpmk9g1m?tk=hXb2gY" className="mt-10 w-full sm:hidden">
            Entradas gratuitas
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Ponentes', '15'],
              ['Asistentes', '100'],
              ['Evento', 'Auditorio FIMGC'],
              ['Lugar', 'Ayacucho, Perú'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-teal-700">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-slate-800">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
