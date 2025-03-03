import { Container } from "./Container";

export function Agenda() {
    const schedule = [
        {
            time: "8:30 AM - 9:00 AM",
            title: "Registro y Networking",
            description: "",
        },
        {
            time: "9:00 AM - 9:15 AM",
            title: "Bienvenida e Inauguración al IWD Ayacucho 2025",
            description:
                "Moderadoras: Glisse Jorge y Sihomara Ochoa",
        },
        {
            time: "9:15 AM - 10:00 AM",
            title: "IA Generativa y Modelos de Lenguaje: Hacia una Inteligencia Artificial con Identidad Nacional",
            description:
                "Ponente: Luis Solis",
        },
        {
            time: "10:00 AM - 10:15 AM",
            title: "Educación y Determinación: El Camino para Romper Cadenas",
            description:
                "Ponente: Maria Quilca",
        },
        {
            time: "10:15 AM - 10:20 AM",
            title: "Break",
            description: "",
        },
        {
            time: "10:20 AM - 11:05 AM",
            title: "Hecho es mejor que perfecto",
            description: "Ponente: Shirley Sosa",
        },
        {
            time: "11:05 AM - 11:20 PM",
            title: "Mujeres en las Startups",
            description:
                "Ponente: Andrea Guillén",
        },
        {
            time: "11:35 AM - 12:20 PM",
            title: "IA en el Frontend: Cómo integrar modelos de Machine Learning en aplicaciones web",
            description:
                "Ponente: Yovany Romero",
        },
        {
            time: "12:20 AM - 12:50 PM",
            title: "Round Table: Mujeres que inspiran",
            description:
                "Ponentes: Elinar Carrillo, Yovany Romero y Shirley Sosa ",
        },
    ];

    return (
        <section
            id="agenda"
            aria-labelledby="agenda-title"
            className="py-5 sm:py-10"
        >
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="agenda-title"
                        className="font-display text-5xl font-medium tracking-tighter text-blue-500 sm:text-5xl"
                    >
                        Agenda
                    </h2>
                    <p className="mt-3 font-display text-2xl tracking-tight text-slate-900">
                        Conoce el programa de nuestro International Women&apos;s Day 2025
                    </p>
                </div>

                {/* Lista de la agenda */}
                <div className="mt-6">
                    {schedule.map((item, index) => (
                        <div key={index} className="py-4 border-b last:border-none">
                            <p className="text-gray-600 font-semibold">{item.time}</p>
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            {item.description && (
                                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
