import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";

const aliados = [
    {
      name: "Incuba UNSCH",
      role: "",
      image: "/images/13.png",
      linkedin: "https://www.facebook.com/investigacionunsch",
    },
    {
      name: "CEIS",
      role: "",
      image: "/images/14.png",
      linkedin: "https://www.facebook.com/CeisUnsch",
    },
    {
      name: "Cactus y Suculentas",
      role: "",
      image: "/images/cactus.png",
      linkedin: "https://www.facebook.com/cactusysuculentasAyacucho",
    },
  ];

export function Sponsors() {

    return (
        <section
            id="sponsors"
            aria-labelledby="sponsors-title"
            className="py-5 sm:py-10"
        >
            <Container>
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="mt-12 font-display text-5xl font-medium text-blue-500">
                        Aliados</h2>
                    <p className="mt-3 text-2xl text-slate-900">Nuestros aliados</p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {aliados.map((aliado, index) => (
                        <SpeakerCard key={`aliado-${index}`} speaker={aliado} />
                    ))}
                    </div>
                    <h2
                        id="sponsors-title"
                        className="mt-12 font-display text-5xl font-medium text-blue-500"
                    >
                        Call for Sponsors
                    </h2>
                    <p className="mt-3 font-display text-2xl tracking-tight text-slate-900">

                        ¿Quieres ser patrocinador del evento?
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <Button href="https://wa.link/vqkjny" className="w-full sm:w-auto">
                            Contáctanos por WhatsApp
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
  function SpeakerCard({ speaker }) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="ambassador-frame">
          <div className="ambassador-border"></div>
          <Image
            className="ambassador-photo rounded-full"
            src={speaker.image}
            alt={speaker.name}
            width={200}
            height={200}
            priority
          />
        </div>
        <h3 className="mt-3 text-xl font-semibold">{speaker.name}</h3>
        <p className="text-slate-700">{speaker.role}</p>
        <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
            alt="Facebook"
            width={20}
            height={20}
          />
        </a>
      </div>
    );
  }