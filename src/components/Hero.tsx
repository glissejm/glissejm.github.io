import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { Timer } from './Timer'
import { FaArrowDown } from 'react-icons/fa' 

export function Hero() {
  return (
    <section id="hero" className="relative py-5 sm:py-10 min-h-screen flex items-center">
      {/* Imágenes decorativas a los lados */}
      <div className="absolute left-0 top-0 hidden lg:flex items-center translate-y-8">
        <Image src="/izquierda.png" alt="Decoración izquierda" width={180} height={780}  /> 
      </div>
      <div className="absolute right-0 top-0 hidden lg:flex items-center transform rotate-180 translate-y-8">
        <Image src="/izquierda.png" alt="Decoración izquierda" width={180} height={780}  /> 
      </div>
      
      <Container className="mx-auto relative">
        <div className="lg:px-12 text-left">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-500 sm:text-7xl">
            <span className="text-slate-800">Redefine </span>Possible
          </h1>
          <p className="mt-6 text-2xl tracking-tight text-slate-800">
            International Women&apos;s Day Ayacucho 2025
          </p>
          <Timer />
          <div className="flex justify-center mt-10">
            <Button href="https://lu.ma/xpmk9g1m?tk=hXb2gY" className="w-50 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105" target="href_blank">
              ¡Registrarse!
            </Button>
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-full max-w-xs">
              <Image src="/board.gif" alt="Decoración derecha" layout="responsive" width={400} height={780} />
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="#speakers" legacyBehavior>
              <a className="inline-block p-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105">
                <FaArrowDown className="w-6 h-6" />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
