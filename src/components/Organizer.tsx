import Image from "next/image";
import { Container } from "./Container";

interface Organizer {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const organizers = [
  {
    name: "Glisse Jorge",
    role: "Backend Developer at BCP | WTM Ambasador",
    image: "/images/7.png",
    linkedin: "https://www.linkedin.com/in/glissejorge/",
  },
  {
    name: "Sihomara Ochoa",
    role: "Bach. Ing. Sistemas | WTM Ambasador",
    image: "/images/12.png",
    linkedin: "https://www.linkedin.com/in/sihomara-sandy-ochoa-cisneros/",
  },
];

    export function Organizer() {
    return (
      <section id="organizer" className="py-2 sm:py-10">
        <Container>
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mt-12 font-display text-5xl font-medium text-blue-500">Organizadoras</h2>
            <p className="mt-3 text-2xl text-slate-900">Equipo de organización</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-15">
              {organizers.map((organizer, index) => (
                <OrganizerCard key={`organizer-${index}`} organizer={organizer} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }
  
  function OrganizerCard({ organizer }: { organizer: Organizer }) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="ambassador-frame">
          <div className="ambassador-border"></div>
          <Image
            className="ambassador-photo rounded-full"
            src={organizer.image}
            alt={organizer.name}
            width={200}
            height={200}
            priority
          />
        </div>
        <h3 className="mt-3 text-xl font-semibold">{organizer.name}</h3>
        <p className="text-slate-700">{organizer.role}</p>
        <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
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