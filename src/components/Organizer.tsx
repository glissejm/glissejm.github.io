import Image from "next/image";
import { Container } from "./Container";

const organizers = [
  {
    name: "Glisse Jorge",
    role: "Backend Developer at BCP",
    image: "/images/7.png",
    linkedin: "https://www.linkedin.com/in/glissejorge/",
  },
  {
    name: "Sihomara Ochoa",
    role: "Bach.Ing. Sistemas WTM Ambasador",
    image: "/images/12.png",
    linkedin: "https://www.linkedin.com/in/sihomara-sandy-ochoa-cisneros/",
  },
];

    export function Organizer() {
    return (
      <section id="organizer" className="py-2 sm:py-10">
        <Container>
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mt-12 font-display text-5xl font-medium text-blue-500">Organizadores</h2>
            <p className="mt-3 text-2xl text-slate-900">Equipo de organización</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-15">
              {organizers.map((organizer, index) => (
                <SpeakerCard key={`organizer-${index}`} speaker={organizer} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
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
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </a>
      </div>
    );
  }