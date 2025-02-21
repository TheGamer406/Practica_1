export default function Agendar() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-700">Agendar Cita</h1>
      <p className="mt-2 text-gray-600">Llena el formulario para agendar una cita con nosotros.</p>
      <form className="mt-4">
        <input type="text" placeholder="Nombre" className="border p-2 w-full rounded mb-2" />
        <input type="email" placeholder="Correo" className="border p-2 w-full rounded mb-2" />
        <input type="date" className="border p-2 w-full rounded mb-2" />
        <button className="bg-blue-600 text-white p-2 w-full rounded">Agendar</button>
      </form>
    </div>
  );
}
