import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          &copy; {new Date().getFullYear()} Women Techmakers Ayacucho
        </p>
      </Container>
    </footer>
  )
}
