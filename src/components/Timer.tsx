"use client"; // 👈 Esto indica que el archivo es un componente del cliente

import { useState, useEffect } from "react";
import { Container } from "./Container";

export function Timer() {
    const eventDate = new Date("2025-03-15T00:00:00");
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const updateCountdown = () => {
            const today = new Date();
            const timeDiff = eventDate.getTime() - today.getTime();
            const days = Math.max(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), 0);
            setDaysLeft(days);
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000 * 60 * 60 * 24);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="countdown" className="flex items-center justify-center  py-5 sm:py-10 text-center">
            <Container>
                <div className="mx-auto max-w-2xl">
                    <h2 className="font-display text-5xl font-medium tracking-tighter text-blue-500 sm:text-5xl">
                    ¡FALTAN {" "}
                    <span className="mt-3 text-6xl font-bold text-gray-900">{daysLeft}</span>   DIAS!
                    </h2>
                    
                </div>
            </Container>
        </section>
    );
}
