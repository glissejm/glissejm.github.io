import { Button } from "./Button";
import { Container } from "./Container";

export function Speakers() {

    return (
        <section
            id="speakers"
            aria-labelledby="speakers-title"
            className="py-5 sm:py-10"
        >
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="speakers-title"
                        className="font-display text-5xl font-medium tracking-tighter text-blue-500 sm:text-5xl"
                    >
                        Call for Speakers
                    </h2>
                    <p className="mt-3 font-display text-2xl tracking-tight text-slate-900">
                        ¿Tienes una historia que inspire? ¿Un tema técnico que apasiona? ¿Un proyecto que te gustaría compartir? ¡Estamos buscando oradores para el evento!
                    </p>
                    <Button href="#" className="mt-10 w-50">
                        Postula ahora
                    </Button>
                </div>
            </Container>
        </section>
    )
}
