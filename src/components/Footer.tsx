import Image from "next/image";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="flex-none py-10 bg-gray-100">
      <Container className="flex flex-col items-center text-center">
        {/* Sección de redes sociales centrada */}
        <div className="flex space-x-6 mb-4">
          <a href="https://www.instagram.com/wtmayacucho" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
              width={30}
              height={30}
              style={{ filter: "invert(27%) sepia(100%) saturate(800%) hue-rotate(190deg) brightness(95%) contrast(95%)" }}
            />
          </a>
          <a href="https://www.facebook.com/wtmayacucho" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
              alt="Facebook"
              width={30}
              height={30}
              style={{ filter: "invert(27%) sepia(100%) saturate(800%) hue-rotate(190deg) brightness(95%) contrast(95%)" }}
            />
          </a>
          <a href="https://www.linkedin.com/company/wtmayacucho/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              width={30}
              height={30}
              style={{ filter: "invert(27%) sepia(100%) saturate(800%) hue-rotate(190deg) brightness(95%) contrast(95%)" }}
            />
          </a>
        </div>

        {/* Texto de derechos de autor centrado debajo de los iconos */}
        <p className="text-base text-slate-500">
          &copy; {new Date().getFullYear()} Women Techmakers Ayacucho
        </p>
      </Container>
    </footer>
  );
}



