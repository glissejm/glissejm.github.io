//import { DiamondIcon } from './DiamondIcon'
"use client";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-between lg:flex-nowrap">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={300} height={160} />
        </div>

        {/* Botón de menú móvil */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-2">
            <div className="w-8 h-1 bg-blue-500"></div>
            <div className="w-8 h-1 bg-blue-500"></div>
            <div className="w-8 h-1 bg-blue-500"></div>
          </div>
        </button>

        {/* Menú de navegación SOLO en mobile */}
        <nav
          className={`absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col text-center p-4">
            <a href="#speakers" className="py-2 px-4 text-blue-600 hover:text-blue-800">
              Speakers
            </a>
            <a href="#volunteer" className="py-2 px-4 text-blue-600 hover:text-blue-800">
              Voluntarios
            </a>
            <a href="#organizer" className="py-2 px-4 text-blue-600 hover:text-blue-800">
              Organizadoras
            </a>
            <a href="#agenda" className="py-2 px-4 text-blue-600 hover:text-blue-800">
              Agenda
            </a>
            <a href="#sponsors" className="py-2 px-4 text-blue-600 hover:text-blue-800">
              Aliados
            </a>
            <a href="#site" className="py-2 px-4 text-blue-600 hover:text-blue-800">
              Lugar
            </a>
          </div>
        </nav>

        {/* Botón de Registro (visible siempre en desktop) */}
        <div className="hidden lg:block">
          <Button href="https://lu.ma/xpmk9g1m?tk=hXb2gY">Regístrate ahora</Button>
        </div>
      </Container>
    </header>
  );
}