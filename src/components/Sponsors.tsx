import { Button } from "./Button";
import { Container } from "./Container";

export function Sponsors() {

    return (
        <section
            id="sponsors"
            aria-labelledby="sponsors-title"
            className="py-5 sm:py-10"
        >
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="sponsors-title"
                        className="font-display text-5xl font-medium tracking-tighter text-blue-500 sm:text-5xl"
                    >
                        Call for Sponsors
                    </h2>
                    <p className="mt-3 font-display text-2xl tracking-tight text-slate-900">

                        ¿Quieres ser patrocinador del evento?
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <Button href="tel:+51951323544" className="w-full sm:w-auto">
                            Contáctanos por Celular
                        </Button>
                        <Button href="mailto:wtmayacucho@gmail.com" className="w-full sm:w-auto">
                            Contáctanos por Correo
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
