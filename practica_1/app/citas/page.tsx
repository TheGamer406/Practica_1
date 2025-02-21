"use client";

import { useState, useEffect } from "react";

interface Cita {
  id: number;
  fecha: string;
  hora: string;
  cliente: string;
  mascota: string;
  estado: string;
}

export default function CitasPage() {
  const [citas, setCitas] = useState<Cita[]>([]);

  useEffect(() => {
    fetch("../api/citas")
      .then((res) => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then((data: Cita[]) => setCitas(data))
      .catch((error) => console.error("Error al cargar citas:", error));
  }, []);
  
  return (
    <div>
      <h1>Lista de Citas</h1>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            {cita.fecha} - {cita.hora} - {cita.cliente} - {cita.mascota} - Estado: {cita.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}
