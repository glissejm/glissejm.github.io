import { Container } from "./Container";

export function Site() {

    return (
        <section
            id="site"
            aria-labelledby="sponsors-title"
            className="py-5 sm:py-10"
        >
            <Container>
                <div className="mx-auto max-w-6xl text-center">
                    <h2
                        id="sponsors-title"
                        className="font-display text-5xl font-medium tracking-tighter text-blue-500 sm:text-5xl"
                    >
                        ¿Cómo llegar?
                    </h2>
                    {/* Mapa de Google Maps */}
                    <br />
                    <div className="flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            📍 Ubicación del Evento
                        </h3>
                        <div className="w-full max-w-10xl h-[500px] rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7770.616458503565!2d-74.22779909176963!3d-13.14294736471905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127dc7788b36f9%3A0xa64ba29281dcc6!2sPabell%C3%B3n%20de%20Ingenier%C3%ADa%20de%20Minas!5e0!3m2!1ses-419!2spe!4v1740890519064!5m2!1ses-419!2spe"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}