import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Veterinaria PetCare</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/agendar">Agendar</Link></li>
          <li><Link href="/servicios">Servicios</Link></li>
          <li><Link href="/nosotros">Nosotros</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
          <li><Link href="/citas">Mis Citas</Link></li>
        </ul>
      </div>
    </nav>
  );
}

