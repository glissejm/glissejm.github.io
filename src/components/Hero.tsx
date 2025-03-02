import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative py-5 sm:py-10">
      {/* Imágenes decorativas a los lados */}
      <div className="absolute left-0 top-0 bottom-0 hidden lg:block">
        <Image src="/izquierda.png" alt="Decoración izquierda" width={180} height={780}  /> 
      </div>
      <div className="absolute right-0 top-0 bottom-0 hidden lg:block">
        <Image src="/board.gif" alt="Decoración derecha" width={400} height={780} />
      </div>
      {/* <div className="absolute right-0 top-0 bottom-0 hidden lg:block">
          <Image src="/board.gif" alt="Decoración derecha" width={400} height={780} />
      </div> */}

      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12 text-center">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-500 sm:text-7xl">
            <span className="text-slate-800">Redefine </span>Possible
          </h1>
          <p className="mt-6 text-2xl tracking-tight text-slate-800">
            International Women&apos;s Day 2025
          </p>
          <Button href="https://lu.ma/xpmk9g1m?tk=hXb2gY" className="mt-10 w-full sm:hidden">
            Registrate ahora
          </Button>
        
          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-1 gap-y-2 sm:mt-16 sm:gap-x-5 sm:gap-y-10 text-center">
          {[
            ['Ponentes', '6'],
            ['Asistentes', '100'],
            ['Lugar del Evento', 'Auditorio de Minas, UNSCH, Ayacucho, Perú'],
          ].map(([name, value]) => (
            <div key={name} className="flex flex-col gap-y-1 items-center lg:items-start mb-1">
              <dt className="font-mono text-sm text-teal-700">{name}</dt>
              <dd className="mt-0 text-xl font-semibold tracking-tight text-slate-800">
                {value}
              </dd>
            </div>
           
          ))}
           <br />
           <br />
        </dl>
        </div>
      </Container>
    </div>
  )
}
