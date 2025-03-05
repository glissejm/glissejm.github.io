"use client";
import { useState, useEffect } from "react";

export function Timer() {
    const eventDate = new Date("2025-03-15T08:30:00").getTime(); // Fecha en milisegundos
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const getTimeRemaining = () => {
            const now = new Date().getTime();
            const timeDiff = eventDate - now;

            if (timeDiff <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((timeDiff / (1000 * 60)) % 60),
                seconds: Math.floor((timeDiff / 1000) % 60),
            };
        };

        const updateCountdown = () => {
            setTimeLeft(getTimeRemaining());
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    return (
        <section className="flex items-center justify-center text-center px-5">
            <div className="max-w-2xl">
                <br />
                <br />
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">¡Separa tu cupo antes que se agoten!</h2>
                <p className="text-lg mb-6">
                    Las entradas se están agotando rápidamente, ¡no te quedes sin la tuya! Asegura tu lugar antes de que sea demasiado tarde.
                </p>
                <div className="flex justify-center gap-4">
                    <div className="bg-white text-blue-600 p-5 rounded-lg shadow-lg w-24">
                        <p className="text-4xl font-bold">{timeLeft.days}</p>
                        <span className="text-sm font-medium">Días</span>
                    </div>
                    <div className="bg-white text-blue-600 p-5 rounded-lg shadow-lg w-24">
                        <p className="text-4xl font-bold">{timeLeft.hours}</p>
                        <span className="text-sm font-medium">Horas</span>
                    </div>
                    <div className="bg-white text-blue-600 p-5 rounded-lg shadow-lg w-24">
                        <p className="text-4xl font-bold">{timeLeft.minutes}</p>
                        <span className="text-sm font-medium">Minutos</span>
                    </div>
                    <div className="bg-white text-blue-600 p-5 rounded-lg shadow-lg w-24">
                        <p className="text-4xl font-bold">{timeLeft.seconds}</p>
                        <span className="text-sm font-medium">Segundos</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
