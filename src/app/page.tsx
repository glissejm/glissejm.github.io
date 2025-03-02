import { Hero } from "@/components/Hero";
import { Speakers } from "@/components/Speakers";
import { Volunteer } from "@/components/Volunteer";
import { Organizer } from "@/components/Organizer";
import { Sponsors } from "@/components/Sponsors";
import { Agenda } from "@/components/Agenda";
import { Site } from "@/components/Site";
import { Timer} from "@/components/Timer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Timer />
      <Speakers />
      <Volunteer />
      <Organizer />
      <Agenda />
      <Sponsors />
      <Site />
    </div>
  );
}
