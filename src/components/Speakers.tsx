import Image from "next/image";
import { Container } from "./Container";

interface Speaker {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const speakers: Speaker[] = [
  {
    name: "Luis Solis",
    role: "Senior Data Scientist at Prediqt",
    image: "/images/6.png",
    linkedin: "https://www.linkedin.com/in/luisfernandosolisnavarro/",
  },
  {
    name: "Shirley Sosa",
    role: "UX Designer at BID",
    image: "/images/10.png",
    linkedin: "https://www.linkedin.com/in/shirsosa/",
  },
  {
    name: "Yovany Romero",
    role: "Frontend Developer at EVOL(TSnet)",
    image: "/images/11.png",
    linkedin: "https://www.linkedin.com/in/printxiomara/",
  },
  {
    name: "Elinar Carrillo",
    role: "Mag. Informática | Docente at UNSCH",
    image: "/images/9.png",
    linkedin: "https://www.linkedin.com/in/elinar-carrillo-riveros-77646173/",
  },
  {
    name: "Andrea Guillén",
    role: "Colaboradora at  INCUBA UNSCH",
    image: "/images/5.png",
    linkedin: "https://www.linkedin.com/in/andreaguillengomez/",
  },

];

  
  export function Speakers() {
    return (
      <section id="speakers" className="py-5 sm:py-10">
        <Container>
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="font-display text-5xl font-medium text-blue-500">Speakers</h2>
            <p className="mt-3 text-2xl text-slate-900">
              Conoce a los speakers del International Women&apos;s Day
            </p>
  
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <SpeakerCard key={`speaker-${index}`} speaker={speaker} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }
  
  function SpeakerCard({ speaker }: { speaker: Speaker }) {
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
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </a>
      </div>
    );
  }