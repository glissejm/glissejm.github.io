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
        <section className="flex items-center justify-center text-center px-5 py-10 bg-white">
            <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-700">
                    ¡Separa tu cupo antes que se agoten!
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                    Las entradas se están agotando rápidamente, ¡no te quedes sin la tuya! Asegura tu lugar antes de que sea demasiado tarde.
                </p>

                {/* Contenedor Responsivo del Timer */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
                    {[
                        { label: "Días", value: timeLeft.days },
                        { label: "Horas", value: timeLeft.hours },
                        { label: "Minutos", value: timeLeft.minutes },
                        { label: "Segundos", value: timeLeft.seconds },
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-100 text-blue-600 p-6 rounded-lg shadow-md w-full">
                            <p className="text-4xl md:text-5xl font-bold">{item.value}</p>
                            <span className="text-sm md:text-base font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
