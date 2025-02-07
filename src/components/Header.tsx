import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from './DiamondIcon'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-blue-600/10 py-4 font-mono text-sm whitespace-nowrap text-blue-500 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2025-03-15">15 de Marzo, 2025</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Ayacucho, PE</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Entradas gratuitas</Button>
        </div>
      </Container>
    </header>
  )
}
