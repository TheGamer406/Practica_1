import { NextRequest, NextResponse } from 'next/server';
import Cita from '@/models/cita';

export const dynamic = 'force-dynamic'; // Asegura que Next.js lo trate como una API del backend

export async function GET() {
  try {
    const citas = await Cita.findAll();
    return NextResponse.json(citas);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener citas' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const nuevaCita = await Cita.create(data);
    return NextResponse.json(nuevaCita, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear cita' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const cita = await Cita.findByPk(id);
    if (!cita) return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
    await cita.update(data);
    return NextResponse.json(cita);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar cita' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const cita = await Cita.findByPk(id);
    if (!cita) return NextResponse.json({ error: 'Cita no encontrada' }, { status: 404 });
    await cita.destroy();
    return NextResponse.json({ message: 'Cita eliminada' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar cita' }, { status: 500 });
  }
}
