import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "@/globals.css";

export const metadata = {
  title: "Veterinaria PetCare",
  description: "Agenda tu cita con los mejores veterinarios",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
